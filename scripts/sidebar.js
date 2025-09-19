document.addEventListener("DOMContentLoaded", () => {
    if (!document.querySelector('.sidebar')) {
        const sidebar = document.createElement('div');
        sidebar.className = 'sidebar';
        const navItems = [
            { href: "index.html", label: "3D Design" },
            { href: "photography.html", label: "Photography" },
            { href: "about.html", label: "About" },
            { href: "contact.html", label: "Contact" }
        ];
        sidebar.innerHTML = `
            <div class="sidebar-logo">
                <a href="index.html" class="nameblock">PHILIP <br>RICCIUTI<br></a>
                <div>
                    <a href="index.html" class="nameblock-subtext">3D ARTIST & DESIGNER</a>
                </div>
            </div>
            <div class="sidebar-nav">
                <ul>
                    ${navItems.map(item => {
                        let isActive = '';
                        if (window.location.pathname.includes('projects')){
                            if (item.href === "index.html"){
                                isActive = ' active';
                                console.log('Project found')
                            }
                            item.href = "../" + item.href;
                        }
                        else if (window.location.pathname.endsWith(item.href) === true) {
                            isActive = ' active';
                        }
                        else {
                            isActive = '';       
                        }
                        console.log(isActive)
                        console.log(window.location.pathname)
                        console.log(item.href)
                        return `
                    <li class="sidebar-item">
                        <a href="${item.href}" class="sidebar-text${isActive}">
                        <span class="nav-dot${isActive}"></span>
                        ${item.label}
                        </a>
                    </li>
                    `;
                    }).join('')}
                </ul>
            </div>
            <div class="sidebar-blank">
                <footer class="sidebar-email">PhilipRicciuti@outlook.com</footer>
            </div>
            <div class="sidebar-line"></div>
            <div class="mobile-nav-mask"></div>
            <div class="mobile-nav">
                <div class = mobile-nav-top>
                    <div class="mobile-button-container">
                        <div class="hamburger-button">
                            <div class="hamburger-line"></div>
                            <div class="hamburger-line"></div>
                            <div class="hamburger-line"></div>
                        </div>
                        <div class="close-button">&times</div>
                    </div>
                    <a href="index.html" class="mobile-nameblock">PHILIP <br>RICCIUTI <br></a>
                    <a href="index.html" class="mobile-nameblock-subtext">3D ARTIST & DESIGNER</a>
                    <div class="mobile-horizontal-line"></div>
                </div>
                <div class = mobile-nav-menu>
                    <a href="index.html" class="mobile-nav-links">3D DESIGN</a><br>
                    <a href="photography.html" class="mobile-nav-links">PHOTOGRAPHY</a><br>
                    <a href="about.html" class="mobile-nav-links">ABOUT</a><br>
                    <a href="contact.html" class="mobile-nav-links active">CONTACT</a><br>
                </div>
                </div>
            </div>
        `;
        document.body.insertBefore(sidebar, document.body.firstChild);
    }
})
