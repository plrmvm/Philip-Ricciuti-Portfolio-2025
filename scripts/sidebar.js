document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.hamburger-button');
    const sidebar = document.querySelector('.sidebar');
    const main_content = document.querySelector('.main-content');
    let clicked = false;
    button.addEventListener("click", () => {
        console.log("clicked")
        if (clicked == false) {
            sidebar.style.visibility = "visible";
            sidebar.style.opacity = "1";
            main_content.style.opacity = "0";
            clicked = true;
        }
        else {
            main_content.style.opacity = "1";
            sidebar.style.opacity = "0";
            sidebar.style.visibility = "hidden";
            clicked = false;
        }


        // Button turn to X
        //
    })
})
