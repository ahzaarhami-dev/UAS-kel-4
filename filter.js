
// =====================================
// FILTER HARGA
// =====================================

const filterBtn =
document.getElementById("filterBtn");

const priceDropdown =
document.getElementById("priceDropdown");


// =====================================
// TENTANG
// =====================================

const aboutBtn =
document.getElementById("aboutBtn");

const aboutDropdown =
document.getElementById("aboutDropdown");


// =====================================
// FILTER DROPDOWN
// =====================================

if (filterBtn && priceDropdown) {

    filterBtn.addEventListener("click", (e) => {

        e.preventDefault();

        const isOpen =
        priceDropdown.classList.contains("show");

        // Tutup dropdown Tentang
        if (aboutDropdown) {
            aboutDropdown.classList.remove("show");
        }
        if (aboutBtn) {
            aboutBtn.setAttribute("aria-expanded", "false");
        }

        // Toggle Filter
        priceDropdown.classList.toggle("show");
        filterBtn.setAttribute("aria-expanded", String(!isOpen));

    });

}


// =====================================
// TENTANG DROPDOWN
// =====================================

if (aboutBtn && aboutDropdown) {

    aboutBtn.addEventListener("click", (e) => {

        e.preventDefault();

        // Tutup dropdown Filter
        if (priceDropdown) {
            priceDropdown.classList.remove("show");
        }
        if (filterBtn) {
            filterBtn.setAttribute("aria-expanded", "false");
        }

        // Tutup daftar kategori harga
        document
            .querySelectorAll(".cafeList")
            .forEach(list => {
                list.classList.remove("show");
                const title = list.previousElementSibling;
                if (title) {
                    title.setAttribute("aria-expanded", "false");
                }
            });

        // Toggle Tentang
        const isOpen = aboutDropdown.classList.toggle("show");
        aboutBtn.setAttribute("aria-expanded", String(isOpen));

    });

}


// =====================================
// PRICE CATEGORY DROPDOWN
// =====================================

document
.querySelectorAll(".priceTitle")
.forEach(title => {

    title.addEventListener("click", (e) => {

        e.preventDefault();

        const cafeList =
        title.nextElementSibling;

        const isOpen =
        cafeList.classList.contains("show");

        document
            .querySelectorAll(".cafeList")
            .forEach(list => {
                list.classList.remove("show");
                const title = list.previousElementSibling;
                if (title) {
                    title.setAttribute("aria-expanded", "false");
                }
            });

        if (!isOpen) {
            cafeList.classList.add("show");
            title.setAttribute("aria-expanded", "true");
        }

    });

});
