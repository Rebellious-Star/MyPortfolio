import cv2
import os
import glob
from PIL import Image

# Create grid of thumbnails (e.g., 240 frames -> 24 rows x 10 cols)
frames = sorted(glob.glob("temp_frames/*.png"))
print(f"Found {len(frames)} frames.")

thumb_w, thumb_h = 128, 72
cols = 10
rows = (len(frames) + cols - 1) // cols

grid_img = Image.new("RGB", (cols * thumb_w, rows * thumb_h))

for i, fpath in enumerate(frames):
    im = Image.open(fpath)
    im = im.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
    r = i // cols
    c = i % cols
    grid_img.paste(im, (c * thumb_w, r * thumb_h))

grid_img.save("frames_grid.jpg")
print("Saved frames_grid.jpg")
