document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.hamburger-button');
    const menu = document.querySelector('.mobile-nav-menu');
    const main_content = document.querySelector('.main-content');
    let clicked = false;
    button.addEventListener("click", () => {
        console.log("clicked")
        if (clicked == false) {
            menu.zIndex = "8";
            menu.style.visibility = "visible";
            menu.style.opacity = "1";
            clicked = true;
        }
        else {
            menu.style.opacity = "0";
            menu.style.visibility = "hidden";
            menu.zIndex = "-1";
            clicked = false;
        }


        // Button turn to X
        //
    })
})
