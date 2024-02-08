const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

function toggleDesktopMenu() {
    menuDesktop.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);