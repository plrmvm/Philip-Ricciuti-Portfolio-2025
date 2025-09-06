
const lightbox = document.createElement('div');
const transitionTime = 150; // ms
const transition = `opacity ${transitionTime}ms ease`;

lightbox.id = 'lightbox';
lightbox.style.opacity = '0';
lightbox.style.transition = transition;
document.body.appendChild(lightbox);


document.body.addEventListener('click', function (e) {
    const image = e.target;
    if (image.classList && image.classList.contains('photography-img')) {
        lightbox.classList.add('active');
        const htmlImg = document.createElement('img');
        htmlImg.src = image.src;
        htmlImg.style.opacity = '0';
        htmlImg.style.transition = transition;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(htmlImg);

        // transition
        setTimeout(() => {
            lightbox.style.opacity = '1';
            htmlImg.style.opacity = '1';
        }, transitionTime);
    }
});


lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.classList.remove('active');
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
    }, transitionTime);
});