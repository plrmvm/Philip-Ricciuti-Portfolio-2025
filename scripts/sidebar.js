document.addEventListener("DOMContentLoaded", () => {
    if (!document.querySelector('.sidebar')) {
        const sidebar = document.createElement('div');
        sidebar.className = 'sidebar';
        sidebar.innerHTML = `
            <div class="sidebar-logo">
                <a href="index.html" class="nameblock">PHILIP <br>RICCIUTI<br></a>
                <div>
                    <a href="index.html" class="nameblock-subtext">3D ARTIST & DESIGNER</a>
                </div>
            </div>
            <div class="sidebar-nav">
                <ul>
                    <li class="sidebar-item">
                        <a href="index.html" class="sidebar-text${window.location.pathname.endsWith('index.html') ? ' active' : ''}">
                            <span class="nav-dot${window.location.pathname.endsWith('index.html') ? ' active' : ''}"></span>
                            3D Design
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="photography.html" class="sidebar-text${window.location.pathname.endsWith('photography.html') ? ' active' : ''}">
                            <span class="nav-dot${window.location.pathname.endsWith('photography.html') ? ' active' : ''}"></span>
                            Photography
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="about.html" class="sidebar-text${window.location.pathname.endsWith('about.html') ? ' active' : ''}">
                            <span class="nav-dot${window.location.pathname.endsWith('about.html') ? ' active' : ''}"></span>
                            About
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="contact.html" class="sidebar-text${window.location.pathname.endsWith('contact.html') ? ' active' : ''}">
                            <span class="nav-dot${window.location.pathname.endsWith('contact.html') ? ' active' : ''}"></span>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div class="sidebar-blank">
                <footer class="sidebar-email">PhilipRicciuti@outlook.com</footer>
            </div>
            <div class="sidebar-line"></div>
        `;
        document.body.insertBefore(sidebar, document.body.firstChild);
    }
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
