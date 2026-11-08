
document.addEventListener("DOMContentLoaded", function () {

    // TOMBOL JELAJAHI KAFE
    const rekomBtn = document.getElementById("rekomBtn");

    if (rekomBtn) {
        rekomBtn.addEventListener("click", function () {
            window.location.href = "recs.html";
        });
    }

    // TOMBOL PROMO
    const promoBtn = document.getElementById("promoBtn");

    if (promoBtn) {
        promoBtn.addEventListener("click", function () {
            window.location.href = "promo.html";
        });
    }

    // DATA KAFE
    const daftarTempat = [
        {
            nama: "Kylau Common Space",
            kata: "kylau common space",
            id: "kylau"
        },
        {
            nama: "PNDAR Cafe",
            kata: "pndar cafe",
            id: "pndar"
        },
        {
            nama: "Bagi Kopi",
            kata: "bagi kopi",
            id: "bagikopi"
        },
        {
            nama: "Hoz Pasta",
            kata: "hoz pasta",
            id: "hozpasta"
        },
        {
            nama: "Bening Coffee and Space",
            kata: "bening coffee and space",
            id: "bening"
        }
    ];

    // SEARCH BAR
    const searchInput = document.getElementById("searchInput");
    const filterResult = document.getElementById("filterResult");

    if (searchInput && filterResult) {

        searchInput.addEventListener("input", function () {

            const keyword = searchInput.value
                .trim()
                .toLowerCase();

            filterResult.innerHTML = "";

            if (keyword === "") return;

            const hasil = daftarTempat.filter(function (tempat) {
                return tempat.kata.includes(keyword);
            });

            if (hasil.length === 0) {

                filterResult.innerHTML =
                    '<p class="search-empty">Tempat tidak ditemukan. Coba kata kunci lain.</p>';

                return;
            }

            hasil.forEach(function (tempat) {

                const link = document.createElement("a");

                link.className = "search-result-item";

                // LANGSUNG MENUJU BAGIAN KAFE YANG DICARI
                link.href = "recs.html#" + tempat.id;

                link.textContent = tempat.nama;

                filterResult.appendChild(link);

            });

        });

        // TEKAN ENTER UNTUK MEMBUKA HASIL PERTAMA
        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                const hasilPertama =
                    filterResult.querySelector("a");

                if (hasilPertama) {
                    window.location.href = hasilPertama.href;
                }

            }

        });

    }

    // SWIPER SLIDER
    if (
        document.querySelector(".swiper") &&
        typeof Swiper !== "undefined"
    ) {

        new Swiper(".swiper", {

            loop: true,
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 15,
            grabCursor: true,

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },

            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            }

        });

    }

});
