import cv2
import os

frames_dir = "temp_frames"
os.makedirs("pose_check", exist_ok=True)

# Save face crops every 1 frame from frame 20 to 190
for i in range(20, 190):
    img = cv2.imread(f"{frames_dir}/frame_{i:04d}.png")
    crop = img[100:460, 480:800]
    cv2.putText(crop, f"Frame {i}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)
    cv2.imwrite(f"pose_check/frame_{i:03d}.png", crop)

print("Saved detailed frame crops 20-189 into pose_check/")
