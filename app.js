// =========================
// MENU HOMEPAGE
// =========================

const menuBtn =
document.getElementById("menuBtn");

const drawer =
document.getElementById("drawer");

if(menuBtn && drawer){

    menuBtn.addEventListener("click", () => {

        drawer.classList.toggle("open");

    });

}


// =========================
// REKOMENDASI CARD
// =========================

const rekomBtn =
document.getElementById("rekomBtn");

if(rekomBtn){

    rekomBtn.addEventListener("click", () => {

        window.location.href = "recs.html";

    });

}


// =========================
// SWIPER HOMEPAGE
// =========================

if(document.querySelector(".swiper")){

    new Swiper(".swiper", {

        loop:true,
        centeredSlides:true,
        slidesPerView:1.2,
        spaceBetween:15,

        pagination:{
            el:".swiper-pagination"
        },

        autoplay:{
            delay:3000
        }

    });

}


// =========================
// DATA CAFE
// =========================

const cafes = [

{
    nama:"Kylau",

    lokasi:"📍 Depok, Jawa Barat",

    deskripsi:
    "Kylau Common Space merupakan kafe yang terletak di Kukusan.",

    gambar:
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200",

    menu:"kylau"

},

{
    nama:"Bening",

    lokasi:"📍 Kukusan, Jawa Barat",

    deskripsi:
    "Bening menawarkan suasana yang nyaman untuk belajar.",

    gambar:
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200",

    menu:"bening"

},

{
    nama:"Pndar",

    lokasi:"📍 Kukusan, Jawa Barat",

    deskripsi:
    "Pndar menjadi salah satu pilihan mahasiswa untuk nugas.",

    gambar:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200",
   
    menu:"pndar"
},

{
    nama:"Bagi Kopi",

    lokasi:"📍 Lenteng Agung, Jakarta",

    deskripsi:
    "Bagi Kopi cocok untuk nongkrong dan bekerja sampai malam.",

    gambar:
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200",

    menu:"bagi kopi"
}

];


// =========================
// DETAIL PAGE
// =========================

let currentCafe = 0;

function updateCafe(){

    document.getElementById("cafeName")
        .textContent =
        cafes[currentCafe].nama;

    document.getElementById("cafeImage")
        .src =
        cafes[currentCafe].gambar;

    document.getElementById("cafeLocation")
        .textContent =
        cafes[currentCafe].lokasi;

    document.getElementById("cafeDescription")
        .textContent =
        cafes[currentCafe].deskripsi;
    
    document.getElementById("cafeMenu")
        .textContent =
        cafes[currentCafe].menu;

    const dots =
    document.querySelectorAll(".dot");

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentCafe]
    .classList.add("active");
}


function nextCafe(){

    currentCafe++;

    if(currentCafe >= cafes.length){

        currentCafe = 0;

    }

    updateCafe();

}

function prevCafe(){

    currentCafe--;

    if(currentCafe < 0){

        currentCafe =
        cafes.length - 1;

    }

    updateCafe();

}


// =========================
// INIT
// =========================

if(document.getElementById("cafeName")){

    updateCafe();

}