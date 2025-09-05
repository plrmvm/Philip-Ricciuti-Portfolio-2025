import os
import json

class Image:
    def __init__(self, id: int, filename: str, description: str):
        self.id = id
        self.filename = filename
        self.description = description

IMAGES_DIR = os.path.join(os.path.dirname(__file__), '../images/photography')
OUTPUT_JSON = os.path.join('../images/json/', 'images.json')

webp_files = [f for f in os.listdir(IMAGES_DIR) if f.lower().endswith('.webp')]

images = [Image(id=i+1, filename=filename, description="") for i, filename in enumerate(webp_files)]

images_dicts = [image.__dict__ for image in images]

with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
    json.dump(images_dicts, f, indent=2)

print(f"added {len(images)}")
