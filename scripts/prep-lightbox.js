const parentDiv = document.getElementById('main-content');
if (parentDiv) {
    const imagesInDiv = parentDiv.querySelectorAll('img');
    imagesInDiv.forEach(img => {
        img.classList.add('for-lightbox');
    });
}