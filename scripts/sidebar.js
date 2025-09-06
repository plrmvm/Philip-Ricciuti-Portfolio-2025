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
                        const isActive = window.location.pathname.endsWith(item.href) ? ' active' : '';
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
        `;
        document.body.insertBefore(sidebar, document.body.firstChild);
    }

    let hamburger = document.querySelector('.hamburger-button');
    if (!hamburger) {
        hamburger = document.createElement('button');
        hamburger.className = 'hamburger-button';
        hamburger.innerHTML = '&#9776;';
        hamburger.style.visibility = 'hidden';
        document.body.appendChild(hamburger);
        document.querySelector('header').appendChild(hamburger);
    }

    const sidebar = document.querySelector('.sidebar');
    function updateSidebarVisibility() {
        if (window.innerWidth < 890) {
            document.querySelector('header').style.height = '40px';
            sidebar.classList.add('sidebar-invisible');
            hamburger.style.visibility = 'visible';
        } else {
            document.querySelector('header').style.height = 'auto';
            sidebar.classList.remove('sidebar-invisible');
            hamburger.style.visibility = 'hidden';
        }
    }

    hamburger.addEventListener('click', () => {
        const isVisible = sidebar.classList.toggle('sidebar-invisible');
        if (sidebar.classList.contains('sidebar-invisible')) {
            hamburger.innerHTML = '&#9776;'; // Hamburger icon
            hamburger.style.fontSize = '2em';
        } else {
            hamburger.innerHTML = '&times;'; // Cross icon
            hamburger.style.fontSize = '2.75em';
        }
    });

    window.addEventListener('resize', updateSidebarVisibility);
    updateSidebarVisibility();
})
