const images = [];

class Image {
    constructor(id, filename, description, width, height) {
        this.id = id;
        this.filename = filename;
        this.description = description;
        this.width = width;
        this.height = height;
    }
}

function fetchImages() {
    fetch('../images/json/images.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const image = new Image(item.id, item.filename, item.description, item.width, item. height);
                images.push(image);
            });
        })
        .catch(error => {
            console.error(error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchImages();
    const imagesDir = '../images/photography/';
    const container = document.createElement('div');

    function setColumnCount() {
        let columnCount = 5;
        if (window.innerWidth <= 1920) {
            columnCount = 4;
        }
        if (window.innerWidth < 1534) {
            columnCount = 3;
        }
        if (window.innerWidth < 1124) {
            columnCount = 2;
        }
        if (window.innerWidth < 600) {
            columnCount = 1;
        }
        container.style.columnCount = `${columnCount}`;
    }

    container.style.columnGap = '16px';
    container.style.width = '100%';
    container.style.maxWidth = '100%';
    container.style.marginTop = '20px';

    setColumnCount();
    window.addEventListener('resize', setColumnCount);

    function renderImages() {
        if (images.length === 0) {
            setTimeout(renderImages, 10);
            return;
        }
        images.forEach(imageObj => {
            const img = document.createElement('img');
            img.loading = 'lazy';
            img.decoding = 'async'; // optional, helps decoding off main thread

            // Give the browser a box before the file downloads:
            if (imageObj.width && imageObj.height) {
                img.width  = imageObj.width;
                img.height = imageObj.height;
                // OR: img.style.aspectRatio = `${imageObj.width} / ${imageObj.height}`;
            }

            img.src = imagesDir + imageObj.filename;
            img.alt = imageObj.description || imageObj.filename;
            img.className = 'photography-img for-lightbox';
            img.style.opacity = '0';
            img.addEventListener('load', () => { img.style.opacity = '1'; });

            container.appendChild(img);
        });

        document.getElementById('photography-gallery').appendChild(container);
    }

    renderImages();

    const mainContent = document.querySelector('.main-content .container');
    if (mainContent) {
        mainContent.appendChild(container);
    } else {
        document.body.appendChild(container);
    }
});
