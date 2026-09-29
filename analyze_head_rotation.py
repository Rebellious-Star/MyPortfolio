import cv2
import numpy as np
import os
import glob
from PIL import Image, ImageDraw, ImageFont

frames = sorted(glob.glob("temp_frames/*.png"))

# Let's crop the face region (y: 100 to 450, x: 450 to 830 in 1280x720 video)
# Let's write a script that outputs crops for frames 20 to 190 in steps of 5 or 10

os.makedirs("face_crops", exist_ok=True)

for i in range(0, 240, 2):
    img = cv2.imread(f"temp_frames/frame_{i:04d}.png")
    # crop face (approx centered)
    crop = img[120:450, 480:800]
    # Add frame number text
    cv2.putText(crop, f"F:{i}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)
    cv2.imwrite(f"face_crops/crop_{i:04d}.png", crop)

# Create a grid of these face crops
crop_files = sorted(glob.glob("face_crops/*.png"))
cols = 12
rows = (len(crop_files) + cols - 1) // cols
cw, ch = 160, 165
grid = Image.new("RGB", (cols * cw, rows * ch))

for idx, cpath in enumerate(crop_files):
    im = Image.open(cpath)
    im = im.resize((cw, ch), Image.Resampling.LANCZOS)
    r = idx // cols
    c = idx % cols
    grid.paste(im, (c * cw, r * ch))

grid.save("face_grid.jpg")
print("Saved face_grid.jpg")
