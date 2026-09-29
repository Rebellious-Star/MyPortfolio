import cv2
import numpy as np
import glob
import math

# We want to find feature movement in head region
# Let's crop upper face/nose area
# Frame 10 is center neutral. Let's find nose/eyes position in neutral frame.

ref_img = cv2.imread("temp_frames/frame_0010.png")
h, w, _ = ref_img.shape

# Let's track face features across frames 20..185 using Shi-Tomasi corner detection + KLT optical flow
gray_ref = cv2.cvtColor(ref_img, cv2.COLOR_BGR2GRAY)
mask = np.zeros_like(gray_ref)
# Mask face region: y: 200..380, x: 550..730
mask[200:380, 550:730] = 255

p0 = cv2.goodFeaturesToTrack(gray_ref, maxCorners=100, qualityLevel=0.3, minDistance=7, mask=mask)

print(f"Found {len(p0)} tracking points on face.")

# Head center approx
center_x = 640.0
center_y = 280.0

angles = []
frame_indices = list(range(20, 186))

prev_gray = cv2.cvtColor(cv2.imread("temp_frames/frame_0020.png"), cv2.COLOR_BGR2GRAY)
# Find initial points on frame 20
p_curr = cv2.goodFeaturesToTrack(prev_gray, maxCorners=100, qualityLevel=0.3, minDistance=7, mask=mask)

for i in frame_indices:
    img = cv2.imread(f"temp_frames/frame_{i:04d}.png")
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    p1, st, err = cv2.calcOpticalFlowPyrLK(prev_gray, gray, p_curr, None)
    
    good_new = p1[st == 1]
    good_old = p_curr[st == 1]
    
    # Average displacement vector from center
    avg_pos = np.mean(good_new, axis=0)
    dx = avg_pos[0] - center_x
    dy = avg_pos[1] - center_y
    
    angle_rad = math.atan2(dy, dx)
    angle_deg = math.degrees(angle_rad) % 360
    
    angles.append((i, avg_pos[0], avg_pos[1], dx, dy, angle_deg))
    
    prev_gray = gray.copy()
    p_curr = good_new.reshape(-1, 1, 2)

for a in angles[::10]:
    print(f"Frame {a[0]:03d}: dx={a[3]:.1f}, dy={a[4]:.1f} -> Angle={a[5]:.1f}°")
