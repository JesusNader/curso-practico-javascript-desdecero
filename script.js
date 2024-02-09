const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const menuMobile = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

function toggleDesktopMenu() {
    const isCartMenuClosed = aside.classList.contains('inactive');

    if (!isCartMenuClosed){
        aside.classList.add('inactive');
    }
    menuDesktop.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartMenuClosed = aside.classList.contains('inactive');

    if (!isCartMenuClosed){
        aside.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}
function toggleCartMenu() {
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    const isDeskstopMenuClosed = menuDesktop.classList.contains('inactive');

    if (!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
    }
    if (!isDeskstopMenuClosed){
        menuDesktop.classList.add('inactive');
    }
 
    aside.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartMenu);