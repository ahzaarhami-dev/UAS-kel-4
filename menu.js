
document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const drawer = document.getElementById("drawer");

    if (!menuBtn || !drawer) return;

    // HAMBURGER MENU
    menuBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        const isOpen = drawer.classList.toggle("open");

        menuBtn.setAttribute("aria-expanded", isOpen);
    });

    // TENTANG: TIM PENGEMBANG DAN KONTAK
    drawer.addEventListener("click", function (event) {

        const infoLink = event.target.closest("[data-menu-info]");

        if (infoLink) {
            event.preventDefault();

            const type = infoLink.dataset.menuInfo;

            const panel = document.getElementById(
                type === "team" ? "teamInfo" : "contactInfo"
            );

            if (panel) {
                panel.hidden = !panel.hidden;
            }

            return;
        }
    });

    // TUTUP MENU SAAT KLIK DI LUAR
    document.addEventListener("click", function (event) {

        if (
            !drawer.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {
            drawer.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
        }

    });

    // TUTUP MENU DENGAN ESCAPE
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            drawer.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
        }

    });

});
