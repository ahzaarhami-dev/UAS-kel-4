
// DATA SEMUA KAFE
const dataKafe = {

    kylau: {
        nama: "Kylau Common Space",
        lokasi: "Depok, Jawa Barat",
        jam: "24 Jam",
        fasilitas: "Free Wi-Fi",
        harga: "$$$$",

        deskripsi: "Kylau Common Space merupakan kafe yang terletak di area Kukusan dekat Universitas Indonesia. Tempat ini menyediakan area belajar, working space, dan kopi premium dengan suasana nyaman untuk mahasiswa.",

        foto: [
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000",
            "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000",
            "https://images.unsplash.com/photo-1493854326931-9a9f4e7f4b5b?w=1000"
        ],

        maps: "https://maps.app.goo.gl/kx9LaV8syGchXpN47",
        menu: "https://share.google/XOxpemcACi0B8kE5Y"
    },

    pndar: {
        nama: "PNDAR Cafe",
        lokasi: "Depok, Jawa Barat",
        jam: "Cek di Maps",
        fasilitas: "Indoor & Outdoor",
        harga: "$$$",

        deskripsi: "Pndar cafe merupakan kafe yang terdiri dari indoor dan outdoor area dengan menu makanan yang bervariasi dan arsitektur bergaya modern. Tempat yang cocok bagi mahasiswa untuk melakukan kegiatan seperti belajar, kerja, atau bersantai.",

        foto: [
            "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1000",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000"
        ],

        maps: "https://maps.app.goo.gl/3Bc44BwRsT8KbQhb6",
        menu: "https://share.google/f3CcEpfQilSpzzFtk"
    },

    "bagi-kopi": {
        nama: "Bagi Kopi",
        lokasi: "Lenteng Agung, Jakarta",
        jam: "Cek di Maps",
        fasilitas: "Indoor AC & Outdoor",
        harga: "$$",

        deskripsi: "Kafe yang menyediakan tempat nongkrong luas, nyaman, dan kekinian. Terdapat area indoor ber-AC serta outdoor. Memiliki menu andalan yaitu kopi susu dengan nama uniknya seperti Bagi Akal Sehat dan Bagi Kasih Sayang.",

        foto: [
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000"
        ],

        maps: "https://maps.app.goo.gl/xfoEnqDBswcMCyNu6",
        menu: "https://share.google/i6vwUAri5Ksg1kmCG"
    },

    "hoz-pasta": {
        nama: "Hoz Pasta",
        lokasi: "Kawasan Universitas Indonesia",
        jam: "Cek di Maps",
        fasilitas: "Indoor Compact",
        harga: "$$",

        deskripsi: "Salah satu kafe di kawasan kampus Universitas Indonesia dengan area indoor yang compact dan menyediakan pasta dan kopi dengan harga yang ramah kantong mahasiswa.",

        foto: [
            "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=1000",
            "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1000",
            "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1000"
        ],

        maps: "https://maps.app.goo.gl/JninGsHBvYeLp2DR8",
        menu: "https://share.google/ICuylXrbAFVGa7n1L"
    },

    bening: {
        nama: "Bening Coffee and Space",
        lokasi: "Depok, Jawa Barat",
        jam: "Cek di Maps",
        fasilitas: "Indoor & Outdoor",
        harga: "$$$",

        deskripsi: "Cafe yang terdiri dari area indoor dan outdoor yang cukup luas, cocok untuk kegiatan kumpul banyak orang yang membutuhkan area yang luas. Dengan tempat yang nyaman untuk sekadar meminum kopi sejenak.",

        foto: [
            "https://images.unsplash.com/photo-1493854326931-9a9f4e7f4b5b?w=1000",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000"
        ],

        maps: "https://maps.app.goo.gl/hfsaq8UDiySHqRwP8",
        menu: "https://share.google/tHA3aMTG7Lht0h1bQ"
    }
};


// MEMILIH KAFE DARI ATRIBUT HTML
const idKafe = document.body.dataset.kafe || "kylau";
const kafe = dataKafe[idKafe];

let fotoAktif = 0;


// MENAMPILKAN DATA KAFE
if (kafe) {

    document.title = kafe.nama + " | AfterHOURS";

    document.getElementById("nama-kafe").textContent = kafe.nama;
    document.getElementById("lokasi-kafe").textContent = kafe.lokasi;
    document.getElementById("jam").textContent = kafe.jam;
    document.getElementById("fasilitas").textContent = kafe.fasilitas;
    document.getElementById("harga").textContent = kafe.harga;
    document.getElementById("deskripsi").textContent = kafe.deskripsi;

    document.getElementById("foto-kafe").src = kafe.foto[0];

    document.getElementById("link-maps").href = kafe.maps;
    document.getElementById("map-icon-link").href = kafe.maps;
    document.getElementById("tombol-maps").href = kafe.maps;

    document.getElementById("link-menu").href = kafe.menu;

    document.getElementById("nama-menu").textContent =
        kafe.nama.split(" ")[0].toLowerCase();
}


// FUNGSI GANTI FOTO
function gantiFoto(arah) {

    if (!kafe) return;

    fotoAktif += arah;

    if (fotoAktif >= kafe.foto.length) {
        fotoAktif = 0;
    }

    if (fotoAktif < 0) {
        fotoAktif = kafe.foto.length - 1;
    }

    document.getElementById("foto-kafe").src =
        kafe.foto[fotoAktif];
}


// FUNGSI BOOKMARK
function toggleBookmark(event) {
    event.preventDefault();

    const tombol = event.currentTarget;

    tombol.textContent =
        tombol.textContent === "♧" ? "▣" : "♧";
}


// FUNGSI FAVORIT
function toggleHeart(event) {
    event.preventDefault();

    const tombol = event.currentTarget;

    tombol.textContent =
        tombol.textContent === "♡" ? "♥" : "♡";
}
s