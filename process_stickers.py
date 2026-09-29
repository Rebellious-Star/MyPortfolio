import cv2
import numpy as np
import os
from PIL import Image

os.makedirs("public/stickers", exist_ok=True)

image_paths = {
    "chibi_thinking.png": r"C:/Users/dhruv/.gemini/antigravity/brain/aefa78cc-e25f-4ef9-9880-92ad4f297aaa/.user_uploaded/media_1790310913876.jpg",
    "chibi_excited.png": r"C:/Users/dhruv/.gemini/antigravity/brain/aefa78cc-e25f-4ef9-9880-92ad4f297aaa/.user_uploaded/media_1790310914132.jpg",
    "chibi_thumbsup.png": r"C:/Users/dhruv/.gemini/antigravity/brain/aefa78cc-e25f-4ef9-9880-92ad4f297aaa/.user_uploaded/media_1790310914161.jpg",
}

for name, src in image_paths.items():
    img = cv2.imread(src)
    if img is None:
        print(f"Failed to read {src}")
        continue
    
    # Convert BGR to BGRA
    bgra = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    
    # Create mask for black background
    # Background is black (B<30, G<30, R<30)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # FloodFill from top-left (0,0) and top-right corners to get external background
    h, w = gray.shape
    mask = np.zeros((h + 2, w + 2), np.uint8)
    
    # FloodFill from corners with tolerance
    bg_seed_mask = np.zeros((h, w), np.uint8)
    
    # Simple thresholding for dark background
    # Notice the character has hair/clothes, background is solid black (intensity < 15)
    _, bg_mask = cv2.threshold(gray, 18, 255, cv2.THRESH_BINARY_INV)
    
    # Set alpha channel: where bg_mask is 255 (black background), alpha = 0
    bgra[:, :, 3] = np.where(bg_mask == 255, 0, 255)
    
    # Smooth edges with feathering / erosion/dilation if needed
    # Save as PNG
    out_path = os.path.join("public", "stickers", name)
    cv2.imwrite(out_path, bgra)
    print(f"Processed and saved transparent sticker to {out_path}")
