import os
import json
from PIL import Image

class ImageObj:
    def __init__(self, id: int, filename: str, description: str, pxwidth: int, pxheight: int):
        self.id = id
        self.filename = filename
        self.description = description
        self.width = pxwidth
        self.height = pxheight

IMAGES_DIR = os.path.join(os.path.dirname(__file__), '../images/photography')
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '../images/json/')
OUTPUT_JSON = os.path.join(OUTPUT_DIR, 'images.json')

# Ensure output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)


jpg_files = [f for f in os.listdir(IMAGES_DIR) if f.lower().endswith('.jpg')] # iterate on all jpg files in dir and store them in a list

images=[]
for file in jpg_files:
    with Image.open(IMAGES_DIR + '/' + file) as img:
        width, height = img.size
    images.append(ImageObj(id=jpg_files.index(file)+1, filename=file, description="", pxwidth=width, pxheight=height))
for image in images:
    print(image.__dict__)
images_dicts = [image.__dict__ for image in images]
with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
    json.dump(images, f, indent=2, default=lambda o: o.__dict__)
print(f"Created {OUTPUT_JSON} with {len(images)} images.")



# Louan's Old Code Below
'''if not os.path.exists(OUTPUT_JSON): # if output json doesn't already exist
    # create new file with no descriptions
    images = [ImageObj(id=i+1, filename=filename, description="") for i, filename in enumerate(jpg_files)] # create all classes in img file
    images_dicts = [ImageObj.__dict__ for image in images] # make dict for all image objects
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(images_dicts, f, indent=2)
    print(f"Created {OUTPUT_JSON} with {len(images)} images.")
else:
    # keep descriptions and add new images
    with open(OUTPUT_JSON, 'r', encoding='utf-8') as f:
        existing_images = json.load(f)
    existing_filenames = {img['filename']: img for img in existing_images}
    updated_images = []
    max_id = max((img['id'] for img in existing_images), default=0)
    updated_images.extend(existing_images)
    new_images = []
    for filename in jpg_files:
        if filename not in existing_filenames:
            max_id += 1 # keep track of img id
            with Image.open(filename) as img:
                width, height = img.size
            new_images.append(ImageObj(id=max_id, filename=filename, description="", dimensions=(width, height)))
    updated_images.extend([img.__dict__ for img in new_images])
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(updated_images, f, indent=2)
    print(f"Updated {OUTPUT_JSON}: {len(new_images)} new images added, {len(updated_images)} total.")'''
