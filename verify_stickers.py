import cv2
import numpy as np

for name in ["chibi_thinking.png", "chibi_excited.png", "chibi_thumbsup.png"]:
    img = cv2.imread(f"public/stickers/{name}", cv2.IMREAD_UNCHANGED)
    h, w, c = img.shape
    corner_alpha = [img[0,0,3], img[0,w-1,3], img[h-1,0,3], img[h-1,w-1,3]]
    print(f"{name}: shape={img.shape}, corner_alphas={corner_alpha}")
