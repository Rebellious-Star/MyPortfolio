import glob
from PIL import Image, ImageDraw

files = [f"public/frames/frame_{i:02d}.webp" for i in range(64)]

w, h = 160, 90
cols = 8
rows = 8

grid = Image.new("RGB", (cols * w, rows * h))
draw = ImageDraw.Draw(grid)

for i, fpath in enumerate(files):
    im = Image.open(fpath)
    im = im.resize((w, h), Image.Resampling.LANCZOS)
    r = i // cols
    c = i % cols
    x, y = c * w, r * h
    grid.paste(im, (x, y))
    
    angle = i * (360.0 / 64.0)
    draw.rectangle([x, y, x + 55, y + 16], fill="black")
    draw.text((x + 2, y + 1), f"#{i:02d} {int(angle)}°", fill="cyan")

grid.save("extracted_64_grid.jpg")
print("Saved extracted_64_grid.jpg")
