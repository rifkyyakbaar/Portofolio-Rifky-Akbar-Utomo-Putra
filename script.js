// Mengambil elemen ikon menu dan navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Saat ikon menu diklik
menuIcon.onclick = () => {
    // Ubah ikon menjadi tanda silang (x)
    menuIcon.classList.toggle('bx-x');
    // Tampilkan atau sembunyikan navbar
    navbar.classList.toggle('active');
};

// Menutup menu saat link diklik (opsional, agar rapi)
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Hapus toggle menu saat scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};