
document.addEventListener('DOMContentLoaded', () => {
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

    fetch('../images/json/images.json')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const img = document.createElement('img');
                img.src = imagesDir + image.filename;
                img.alt = image.filename;
                img.className = 'photography-img';
                img.loading = 'lazy';
                img.style.opacity = '0';
                img.style.transition = 'opacity 2s';
                img.addEventListener('load', () => {
                    img.style.opacity = '1';
                });
                container.appendChild(img);
            });
        })
        .catch(error => {
            container.textContent = 'Failed to load images.';
            console.error('Error loading images.json:', error);
        });

    const mainContent = document.querySelector('.main-content .container');
    if (mainContent) {
        mainContent.appendChild(container);
    } else {
        document.body.appendChild(container);
    }
});
