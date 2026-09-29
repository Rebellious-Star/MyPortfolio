import cv2
import os
import glob
from PIL import Image, ImageDraw, ImageFont

frames = sorted(glob.glob("temp_frames/*.png"))

thumb_w, thumb_h = 160, 90
cols = 10
rows = (len(frames) + cols - 1) // cols

grid_img = Image.new("RGB", (cols * thumb_w, rows * thumb_h))
draw = ImageDraw.Draw(grid_img)

for i, fpath in enumerate(frames):
    im = Image.open(fpath)
    im = im.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
    r = i // cols
    c = i % cols
    x = c * thumb_w
    y = r * thumb_h
    grid_img.paste(im, (x, y))
    
    # Draw frame number
    draw.rectangle([x, y, x + 35, y + 16], fill="black")
    draw.text((x + 2, y + 1), str(i), fill="white")

grid_img.save("frames_stamped.jpg")
print("Saved frames_stamped.jpg")
