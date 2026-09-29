import cv2
import numpy as np
import os
from PIL import Image, ImageDraw, ImageFont

# 8 compass directions and candidates based on optical flow and visual grid:
# RIGHT (0°): ~F:55
# DOWN-RIGHT (45°): ~F:85
# DOWN (90°): ~F:120
# DOWN-LEFT (135°): ~F:145
# LEFT (180°): ~F:168
# UP-LEFT (225°): ~F:182 or ~F:22
# UP (270°): ~F:28
# UP-RIGHT (315°): ~F:40

candidates = [
    ("RIGHT (0 deg)", 55),
    ("DOWN-RIGHT (45 deg)", 85),
    ("DOWN (90 deg)", 120),
    ("DOWN-LEFT (135 deg)", 145),
    ("LEFT (180 deg)", 168),
    ("UP-LEFT (225 deg)", 184),
    ("UP (270 deg)", 28),
    ("UP-RIGHT (315 deg)", 42),
    ("CENTER (neutral)", 10)
]

w, h = 320, 320
grid = Image.new("RGB", (3 * w, 3 * h))
draw = ImageDraw.Draw(grid)

# Map positions in a 3x3 layout:
# Top-Left: UP-LEFT, Top-Center: UP, Top-Right: UP-RIGHT
# Mid-Left: LEFT, Mid-Center: CENTER, Mid-Right: RIGHT
# Bot-Left: DOWN-LEFT, Bot-Center: DOWN, Bot-Right: DOWN-RIGHT

pos_map = {
    "UP-LEFT (225 deg)": (0, 0),
    "UP (270 deg)": (1, 0),
    "UP-RIGHT (315 deg)": (2, 0),
    "LEFT (180 deg)": (0, 1),
    "CENTER (neutral)": (1, 1),
    "RIGHT (0 deg)": (2, 1),
    "DOWN-LEFT (135 deg)": (0, 2),
    "DOWN (90 deg)": (1, 2),
    "DOWN-RIGHT (45 deg)": (2, 2)
}

for label, fnum in candidates:
    img = cv2.imread(f"temp_frames/frame_{fnum:04d}.png")
    # Crop around face center
    crop = img[100:460, 480:800]
    crop_rgb = cv2.cvtColor(crop, cv2.COLOR_BGR2RGB)
    pil_crop = Image.fromarray(crop_rgb).resize((w, h), Image.Resampling.LANCZOS)
    
    col, row = pos_map[label]
    grid.paste(pil_crop, (col * w, row * h))
    
    # Overlay label
    d = ImageDraw.Draw(grid)
    d.rectangle([col*w+5, row*h+5, col*w+220, row*h+35], fill="black")
    d.text((col*w+10, row*h+10), f"{label}\nFrame {fnum}", fill="yellow")

grid.save("compass_8_directions.jpg")
print("Saved compass_8_directions.jpg")
