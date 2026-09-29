import cv2
import os

video_path = os.path.join("public", "character.mp4")
cap = cv2.VideoCapture(video_path)

if not cap.isOpened():
    print(f"Error opening video: {video_path}")
    exit(1)

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS)
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
duration = total_frames / fps if fps > 0 else 0

print(f"Video Info:")
print(f"Total Frames: {total_frames}")
print(f"FPS: {fps}")
print(f"Width: {width}, Height: {height}")
print(f"Duration: {duration:.2f} seconds")

# Dump all frames as low-res or full-res jpg into temp_frames to inspect
os.makedirs("temp_frames", exist_ok=True)

frame_idx = 0
bg_colors = []

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Save frame
    cv2.imwrite(os.path.join("temp_frames", f"frame_{frame_idx:04d}.png"), frame)
    
    # Sample top-left corner (0,0), top-right corner (width-1, 0), bottom-left (0, height-1), bottom-right (width-1, height-1)
    c1 = frame[10, 10]
    c2 = frame[10, width-10]
    c3 = frame[height-10, 10]
    c4 = frame[height-10, width-10]
    bg_colors.append((c1 + c2 + c3 + c4) / 4.0)
    
    frame_idx += 1

cap.release()

if bg_colors:
    avg_bgr = sum(bg_colors) / len(bg_colors)
    b, g, r = avg_bgr[0], avg_bgr[1], avg_bgr[2]
    hex_color = f"#{int(r):02x}{int(g):02x}{int(b):02x}"
    print(f"Detected Background BGR: ({b:.1f}, {g:.1f}, {r:.1f}) -> RGB Hex: {hex_color}")
