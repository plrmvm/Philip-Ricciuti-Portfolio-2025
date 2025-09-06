const images = [];

class Image {
    constructor(id, filename, description) {
        this.id = id;
        this.filename = filename;
        this.description = description;
    }
}

function fetchImages() {
    fetch('../images/json/images.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const image = new Image(item.id, item.filename, item.description);
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
            img.src = imagesDir + imageObj.filename;
            img.alt = imageObj.description || imageObj.filename;
            img.className = 'photography-img';
            img.loading = 'lazy';
            img.style.opacity = '0';
            img.style.transition = 'opacity 2s, transform 0.1s ease';
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
            container.appendChild(img);
        });
    }

    renderImages();

    const mainContent = document.querySelector('.main-content .container');
    if (mainContent) {
        mainContent.appendChild(container);
    } else {
        document.body.appendChild(container);
    }
});
