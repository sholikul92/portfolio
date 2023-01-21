// // Toggle class active
const togle = document.querySelector('.togle');
const menu = document.querySelector('.navbar-nav');

// // ketika hamburger menu diklik
togle.addEventListener('click', () => {
    togle.classList.toggle('active');
    menu.classList.toggle('slide');
});


// ketika navigasi di klik dan halaman discrol
window.addEventListener('scroll', () => {
    togle.classList.remove('active');
    menu.classList.remove('slide');
});

// klik diluar sidebar untuk menutup nav nya
// const hamburgerMenu = document.querySelector('.togle');

document.addEventListener('click', function(e){
    if(!togle.contains(e.target) && !menu.contains(e.target)){
        menu.classList.remove('slide');
        togle.classList.remove('active');
    }
})