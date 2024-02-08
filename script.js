const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

function toggleDesktopMenu() {
    menuDesktop.classList.toggle('inactive');
}

function toggleMobileMenu() {
    menuMobile.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);