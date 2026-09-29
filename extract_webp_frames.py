import cv2
import numpy as np
import os

os.makedirs("public/frames", exist_ok=True)

video_path = os.path.join("public", "character.mp4")
cap = cv2.VideoCapture(video_path)

all_frames = []
while True:
    ret, frame = cap.read()
    if not ret:
        break
    all_frames.append(frame)

cap.release()
print(f"Loaded {len(all_frames)} frames from {video_path}.")

# 1. Save center.webp from neutral front frame (Frame 10)
center_frame = all_frames[10]
cv2.imwrite("public/center.webp", center_frame, [cv2.IMWRITE_WEBP_QUALITY, 95])
print("Saved public/center.webp")

# 2. Key control points mapping (Angle in degrees -> Video frame index)
# Angles: 0° = RIGHT, 45° = DOWN-RIGHT, 90° = DOWN, 135° = DOWN-LEFT,
#         180° = LEFT, 225° = UP-LEFT, 270° = UP, 315° = UP-RIGHT, 360° = RIGHT

# Define control points (angle_deg, frame_idx)
# Notice: F:55 is 0°, F:85 is 45°, F:120 is 90°, F:145 is 135°, F:168 is 180°, F:184 is 225°, F:28 is 270°, F:42 is 315°, F:55+160=215... wait!
# Let's map continuous angle from 0 to 360°:
# Angle 0°: F:55
# Angle 45°: F:85
# Angle 90°: F:120
# Angle 135°: F:145
# Angle 180°: F:168
# Angle 225°: F:184
# Angle 270°: F:28 (note: F:184 to F:28 is smooth transition through top left/top)
# Angle 315°: F:42
# Angle 360°: F:55

control_angles = [0.0, 45.0, 90.0, 135.0, 180.0, 225.0, 270.0, 315.0, 360.0]
# To make frame numbers monotonically increasing for interpolation:
# Frame 55 = 0°
# Frame 85 = 45°
# Frame 120 = 90°
# Frame 145 = 135°
# Frame 168 = 180°
# Frame 184 = 225°
# Frame 28 (which is after wrap: 184 + (28 - 20) approx -> 184 + 16 = 200) = 270°
# Frame 42 -> 200 + 14 = 214 = 315°
# Frame 55 -> 214 + 13 = 227 = 360°

control_frames_unwrapped = [55.0, 85.0, 120.0, 145.0, 168.0, 184.0, 200.0, 214.0, 227.0]

def get_video_frame_index(target_angle_deg):
    # Interpolate unwrapped frame
    unwrapped_f = np.interp(target_angle_deg, control_angles, control_frames_unwrapped)
    # Map back to actual frame index in 0..239
    # If unwrapped_f >= 188: wrap around using offset (unwrapped_f - 188 + 20)
    if unwrapped_f >= 188.0:
        actual_f = 20.0 + (unwrapped_f - 188.0)
    else:
        actual_f = unwrapped_f
    return int(round(actual_f)) % len(all_frames)

# Extract 64 WebP frames
extracted_info = []

for i in range(64):
    target_angle = i * (360.0 / 64.0)
    f_idx = get_video_frame_index(target_angle)
    frame_data = all_frames[f_idx]
    
    out_path = f"public/frames/frame_{i:02d}.webp"
    cv2.imwrite(out_path, frame_data, [cv2.IMWRITE_WEBP_QUALITY, 95])
    extracted_info.append((i, target_angle, f_idx, out_path))

print(f"Successfully extracted 64 WebP frames to public/frames/")
print("Sample mappings:")
for info in extracted_info[::8]:
    print(f"WebP index {info[0]:02d} | Target Angle: {info[1]:6.1f}° | Video Frame: {info[2]:3d} -> {info[3]}")
