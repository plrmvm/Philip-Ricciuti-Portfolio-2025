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
})
