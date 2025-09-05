
document.addEventListener('DOMContentLoaded', () => {
    const imagesDir = '../images/photography/';
    const container = document.createElement('div');
    let columnCount = 3;
    if (window.innerWidth < 600) {
        columnCount = 1;
    }
    container.style.columnCount = `${columnCount}`;
    container.style.columnGap = '16px';
    container.style.width = '100%';
    container.style.maxWidth = '1200px';

    fetch('../images/json/images.json')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const img = document.createElement('img');
                img.src = imagesDir + image.filename;
                img.alt = image.filename;
                img.style.maxWidth = '100%';
                img.style.marginBottom = '8px';
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
