import React, { useEffect, useRef, useState } from 'react';

// Shortest path circular angular lerp
function lerpAngle(current, target, factor) {
  let diff = target - current;
  while (diff < -Math.PI) diff += 2 * Math.PI;
  while (diff > Math.PI) diff -= 2 * Math.PI;
  return current + diff * factor;
}

export default function CharacterCanvas({ onLoaded }) {
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const centerImgRef = useRef(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const mousePosRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentAngleRef = useRef(0); // in radians

  // 1. Preload 64 WebP frames + center.webp
  useEffect(() => {
    let loadedCount = 0;
    const totalFrames = 65; // 64 frames + 1 center frame

    const checkComplete = () => {
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
      if (loadedCount === totalFrames) {
        setIsLoading(false);
        if (onLoaded) onLoaded();
      }
    };

    // Load center image
    const centerImg = new Image();
    centerImg.src = '/center.webp';
    centerImg.onload = checkComplete;
    centerImg.onerror = checkComplete;
    centerImgRef.current = centerImg;

    // Load 64 circular frames
    const frames = [];
    for (let i = 0; i < 64; i++) {
      const img = new Image();
      const numStr = i.toString().padStart(2, '0');
      img.src = `/frames/frame_${numStr}.webp`;
      img.onload = checkComplete;
      img.onerror = checkComplete;
      frames.push(img);
    }
    framesRef.current = frames;
  }, [onLoaded]);

  // 2. Track mouse coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3. 60 FPS requestAnimationFrame render loop
  useEffect(() => {
    if (isLoading) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      // Compute cover scaling for 1280x720 video frame
      const scale = Math.max(w / 1280, h / 720);
      const dw = 1280 * scale;
      const dh = 720 * scale;
      const dx0 = (w - dw) / 2;
      const dy0 = (h - dh) / 2;

      // Character face position in frame is approx (640, 280)
      const faceX = dx0 + 640 * scale;
      const faceY = dy0 + 280 * scale;

      // Distance from mouse to face center
      const mx = mousePosRef.current.x;
      const my = mousePosRef.current.y;
      const dist = Math.hypot(mx - faceX, my - faceY);

      // Deadzone radius (~12% of screen min dimension)
      const deadzoneRadius = 0.12 * Math.min(w, h);

      let targetImg = null;

      if (dist <= deadzoneRadius) {
        // CENTER EYE CONTACT DEADZONE
        targetImg = centerImgRef.current;
      } else {
        // Calculate target angle (atan2)
        const targetAngle = Math.atan2(my - faceY, mx - faceX);

        // Shortest path circular angular lerp with fast response ~0.26
        currentAngleRef.current = lerpAngle(currentAngleRef.current, targetAngle, 0.26);

        // Map angle to frame index 0..63
        let norm = currentAngleRef.current % (2 * Math.PI);
        if (norm < 0) norm += 2 * Math.PI;

        const frameIndex = Math.floor((norm / (2 * Math.PI)) * 64 + 0.5) % 64;
        targetImg = framesRef.current[frameIndex];
      }

      // Draw EXACTLY ONE frame at 100% opacity (no alpha blending)
      if (targetImg && targetImg.complete) {
        ctx.drawImage(targetImg, dx0, dy0, dw, dh);
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [isLoading]);

  return (
    <>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#be1710] text-white">
          <div className="font-cursive text-5xl mb-4 animate-pulse">Dhruv</div>
          <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-white transition-all duration-150 ease-out"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <p className="text-xs uppercase tracking-widest text-white/70">
            Loading Experience {loadProgress}%
          </p>
        </div>
      )}

      {/* Rock-solid motionless canvas covering 100vw 100vh */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ backgroundColor: '#be1710' }}
      />
    </>
  );
}
