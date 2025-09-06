import os
import json

class Image:
    def __init__(self, id: int, filename: str, description: str):
        self.id = id
        self.filename = filename
        self.description = description

IMAGES_DIR = os.path.join(os.path.dirname(__file__), '../images/photography')
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '../images/json/')
OUTPUT_JSON = os.path.join(OUTPUT_DIR, 'images.json')

# Ensure output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)


webp_files = [f for f in os.listdir(IMAGES_DIR) if f.lower().endswith('.webp')]

if not os.path.exists(OUTPUT_JSON):
    # create new file with no descriptions
    images = [Image(id=i+1, filename=filename, description="") for i, filename in enumerate(webp_files)]
    images_dicts = [image.__dict__ for image in images]
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
    for filename in webp_files:
        if filename not in existing_filenames:
            max_id += 1
            new_images.append(Image(id=max_id, filename=filename, description=""))
    updated_images.extend([img.__dict__ for img in new_images])
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(updated_images, f, indent=2)
    print(f"Updated {OUTPUT_JSON}: {len(new_images)} new images added, {len(updated_images)} total.")
