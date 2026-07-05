from PIL import Image

path = r"C:\Users\Puneeth\Documents\projects\LoopTieStudio\public\images\logo\transparent-brand-logo.png"
img = Image.open(path)
w, h = img.size

# Let's find the bounding box of non-transparent pixels
bbox = img.getbbox()
print("Bounding box of non-transparent pixels:", bbox)

# Let's inspect the non-transparent pixels near the corners of the bounding box
# For example, if bbox is (x0, y0, x1, y1), let's inspect pixels near x0, y0
if bbox:
    x0, y0, x1, y1 = bbox
    # Print a 10x10 block near (x0, y0)
    for y in range(y0, y0 + 10):
        row = []
        for x in range(x0, x0 + 10):
            row.append(img.getpixel((x, y)))
        print(f"y={y}:", [p[3] for p in row]) # Print only alpha values first
