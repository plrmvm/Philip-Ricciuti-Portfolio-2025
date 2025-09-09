// ignore missing import statement warnings

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('.mobile-nav-menu'); // Page selection menu that comes up after hitting the hamburger button
    const hamburger_button = document.querySelector('.hamburger-button'); // Hamburger button on mobile
    const close_button = document.querySelector('.close-button'); // X button on mobile
    let clicked = false;
    function mobile_menu_transitions() {
        gsap.fromTo(".close-button", {
            scale: 1.5, opacity: 0
            },
            {
            scale: 1, opacity: 1, duration: 0.6, ease: "power4inOut"
            })
        gsap.fromTo(".mobile-nav-links", {
                scale: 1.2, opacity: 0
            },
            {
                scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power4inOut"
            })
    }
    function mobile_menu_exit() {
        return new Promise((resolve) => {
            gsap.fromTo(".close-button", {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power4inOut"})
            gsap.fromTo(".mobile-nav-links", {opacity: 1}, {opacity: 0, duration: 0.2, stagger: 0.05, ease: "power4inOut", onComplete: resolve})
        })
    }
    hamburger_button.addEventListener("click", () => {
        if (clicked === false) {
            menu.zIndex = "8";
            menu.style.visibility = "visible";
            hamburger_button.style.visibility = "hidden";
            close_button.style.visibility = "visible";
            menu.style.opacity = "1";
            mobile_menu_transitions();
            clicked = true;
        }
    })
    close_button.addEventListener("click", () => {
        if (clicked === true) {
            mobile_menu_exit().then(() => { // Only complete this after menu anim is done
                menu.style.opacity = "0";
                menu.style.visibility = "hidden";
                close_button.style.visibility = "hidden";
                hamburger_button.style.visibility = "visible"
                menu.zIndex = "-1";
                clicked = false;
                // add event listener to see if screen is correct size
                    // if screen is under 768px then it goes away
            })
        }
        // Button turn to X
        //
    })
})
