
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

        // Toggle Filter
        priceDropdown.classList.toggle("show");

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

        // Tutup daftar kategori harga
        document
            .querySelectorAll(".cafeList")
            .forEach(list => {
                list.classList.remove("show");
            });

        // Toggle Tentang
        aboutDropdown.classList.toggle("show");

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
            });

        if (!isOpen) {
            cafeList.classList.add("show");
        }

    });

});
