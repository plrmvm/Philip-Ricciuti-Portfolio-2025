import os
from PIL import Image

IMG_DIRECTORY = "C:/Users/P3210/WebstormProjects/Portfolio/images/photography"
THUMBNAIL_DIRECTORY = "C:/Users/P3210/WebstormProjects/Portfolio/images/photography"
TEMPLATE = "C:/Users/P3210/WebstormProjects/Portfolio/photography_template.html"
HTML_WRITE_PATH= "C:/Users/P3210/WebstormProjects/Portfolio/photography.html"
IMG_RELATIVE_PATH = "images/photography/"
CSS_IMG_CLASS = "photography-img"

class ImgGallery:

    column1_height = 0.0
    column2_height = 0.0
    column3_height = 0.0

    column1_list = []
    column2_list = []
    column3_list = []

    def __init__(self, name, path):
        self.name = name
        self.path = path
        self.width = ImgGallery.getpx(self.path)[0]
        self.height = ImgGallery.getpx(self.path)[1]
        self.column = ImgGallery.columnselector(self.height, self.name)
        return

    @staticmethod
    def getpx(path):
        with Image.open(path) as im:
            return im.size

    @staticmethod
    def columnselector(height, name):
        if ImgGallery.column2_height <= ImgGallery.column1_height:
            ImgGallery.column2_height += height
            ImgGallery.column2_list.append(IMG_RELATIVE_PATH + name)
            return "col2"
        elif ImgGallery.column1_height <= ImgGallery.column3_height:
            ImgGallery.column1_height += height
            ImgGallery.column1_list.append(IMG_RELATIVE_PATH + name)
            return "col1"
        else:
            ImgGallery.column3_height += height
            ImgGallery.column3_list.append(IMG_RELATIVE_PATH + name)
            return "col3"

    @staticmethod
    def compile():
        with open(TEMPLATE, 'r') as file:
            template = file.read()
            template = template.split("<!-- SPLIT -->")
            print(template[0])
        with open(HTML_WRITE_PATH, "w") as f:
            f.write(template[0])
            f.write('<div class="row">\n        <div class="img-gallery-column">\n')
            for link in ImgGallery.column1_list:
                f.write('        <img src=' + link + ' alt=' + link + ' class="' + CSS_IMG_CLASS + '" loading=lazy>\n')
            f.write('</div>\n        <div class="img-gallery-column">\n')
            for link in ImgGallery.column2_list:
                f.write('        <img src=' + link + ' alt=' + link + ' class="' + CSS_IMG_CLASS + '" loading=lazy>\n')
            f.write('</div>\n        <div class="img-gallery-column">\n')
            for link in ImgGallery.column3_list:
                f.write('        <img src=' + link + ' alt=' + link + ' class="' + CSS_IMG_CLASS + '" loading=lazy>\n')
            f.write(template[1])

def main(directory):
    img_instances = []
    for file in os.listdir(directory):
        _, ext = os.path.splitext(file)
        if ext.lower() == ".jpg":
            path = directory + "/" + file
            img_instances.append((file, ImgGallery(file, path)))
    ImgGallery.compile()
    return

if __name__ == "__main__":
    main(IMG_DIRECTORY)