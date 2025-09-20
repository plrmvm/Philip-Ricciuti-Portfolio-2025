document.addEventListener("DOMContentLoaded", () => {
    if (!document.querySelector(".sidebar")) {
        const sidebar = document.createElement("div");
        sidebar.className = "sidebar";

        // ---------- centralize link logic here ----------
        const inProjects = location.pathname.includes("/projects/");
        const prefix = inProjects ? "../../" : "";

        // Treat "/index.html" as "/" so both match current homepage
        const normPath = (p) =>
            new URL(p, location.href).pathname.replace(/\/index\.html?$/, "/");

        const navItems = [
            { href: "index.html", label: "3D Design" },
            { href: "photography.html", label: "Photography" },
            { href: "about.html", label: "About" },
            { href: "contact.html", label: "Contact" },
        ].map((item) => {
            const computedHref = prefix + item.href;

            // Active logic:
            //  - On project pages: Home is active
            //  - Else: active if normalized current path equals this link’s normalized path
            const active = inProjects
                ? item.href === "index.html"
                : normPath(location.pathname) === normPath(computedHref);

            return { ...item, href: computedHref, active };
        });

        const logoHref = prefix + "index.html";
        // ------------------------------------------------

        sidebar.innerHTML = `
      <div class="sidebar-logo">
        <a href="${logoHref}" class="nameblock">PHILIP <br>RICCIUTI<br></a>
        <div>
          <a href="${logoHref}" class="nameblock-subtext">3D ARTIST & DESIGNER</a>
        </div>
      </div>

      <div class="sidebar-nav">
        <ul>
          ${navItems
            .map(
                (item) => `
            <li class="sidebar-item">
              <a href="${item.href}" class="sidebar-text${item.active ? " active" : ""}">
                <span class="nav-dot${item.active ? " active" : ""}"></span>
                ${item.label}
              </a>
            </li>`
            )
            .join("")}
        </ul>
      </div>

      <div class="sidebar-blank">
        <footer class="sidebar-email">PhilipRicciuti@outlook.com</footer>
      </div>

      <div class="sidebar-line"></div>

      <div class="mobile-nav-mask"></div>
      <div class="mobile-nav">
        <div class="mobile-nav-top">
          <div class="mobile-button-container">
            <div class="hamburger-button">
              <div class="hamburger-line"></div>
              <div class="hamburger-line"></div>
              <div class="hamburger-line"></div>
            </div>
            <div class="close-button">&times;</div>
          </div>

          <a href="${logoHref}" class="mobile-nameblock">PHILIP <br>RICCIUTI <br></a>
          <a href="${logoHref}" class="mobile-nameblock-subtext">3D ARTIST & DESIGNER</a>
          <div class="mobile-horizontal-line"></div>
        </div>

        <div class="mobile-nav-menu">
          ${navItems
            .map(
                (item) =>
                    `<a href="${item.href}" class="mobile-nav-links${
                        item.active ? " active" : ""
                    }">${item.label.toUpperCase()}</a>`
            )
            .join("<br>")}
          <br>
        </div>
      </div>
    `;

        document.body.insertBefore(sidebar, document.body.firstChild);
    }
});
