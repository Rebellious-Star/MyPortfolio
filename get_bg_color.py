import cv2
import numpy as np

img = cv2.imread("public/center.webp")
h, w, c = img.shape
corners = [
    img[10, 10],
    img[10, w-10],
    img[h-10, 10],
    img[h-10, w-10],
    img[50, 50],
    img[50, w-50]
]
avg_bgr = np.mean(corners, axis=0)
b, g, r = avg_bgr[0], avg_bgr[1], avg_bgr[2]
hex_color = f"#{int(round(r)):02x}{int(round(g)):02x}{int(round(b)):02x}"
print(f"Corner BGR: ({b:.2f}, {g:.2f}, {r:.2f}) -> Exact RGB Hex: {hex_color}")
