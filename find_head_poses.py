import cv2
import numpy as np
import os
import glob

# Load Haar cascade face detector
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')

frames = sorted(glob.glob("temp_frames/*.png"))

results = []

for i, fpath in enumerate(frames):
    img = cv2.imread(fpath)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Crop around upper body/head region (head is usually in upper 60% of image)
    h, w, _ = img.shape
    crop = gray[0:int(h*0.7), int(w*0.25):int(w*0.75)]
    
    # Track brightest/darkest features or nose/eyes or template matching
    # Let's also compute center of mass of dark features (hair/eyes/face) in the head region
    # Or face detection
    faces = face_cascade.detectMultiScale(crop, 1.1, 4)
    
    if len(faces) > 0:
        fx, fy, fw, fh = faces[0]
        results.append((i, fx, fy, fw, fh))
    else:
        results.append((i, None, None, None, None))

print(f"Detected face in {sum(1 for r in results if r[1] is not None)} / {len(results)} frames.")
