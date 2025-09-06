document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('.mobile-nav-menu');
    const hamburger_button = document.querySelector('.hamburger-button');
    const close_button = document.querySelector('.close-button');
    let clicked = false;
    hamburger_button.addEventListener("click", () => {
        if (clicked == false) {
            menu.zIndex = "8";
            menu.style.visibility = "visible";
            hamburger_button.style.visibility = "hidden";
            close_button.style.visibility = "visible";
            menu.style.opacity = "1";
            clicked = true;
        }
    })
    close_button.addEventListener("click", () => {
        if (clicked == true) {
            menu.style.opacity = "0";
            menu.style.visibility = "hidden";
            close_button.style.visibility = "hidden";
            hamburger_button.style.visibility = "visible"
            menu.zIndex = "-1";
            clicked = false;
        }
        // Button turn to X
        //
    })
})
