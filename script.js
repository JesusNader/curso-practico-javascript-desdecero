function toggleDesktopMenu() {
    const isCartMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isCartMenuClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    menuDesktop.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isCartMenuClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    menuMobile.classList.toggle('inactive');

    if(menuMobile.classList.contains('inactive')){
        body.style.overflow = 'visible';
    } else{
        body.style.overflow= 'hidden';
    }
}

function toggleCartMenu() {
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    const isDeskstopMenuClosed = menuDesktop.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
    }
    if (!isDeskstopMenuClosed){
        menuDesktop.classList.add('inactive');
    }
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
 
    shoppingCartContainer.classList.toggle('inactive');

    if(!shoppingCartContainer.classList.contains('inactive')){
        body.style.overflow = 'visible';
    }
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '/assets/icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

const body = document.querySelector('body');
const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('.cards-container');

const productList = [
{
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Windows',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Windows',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Windows',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}
];

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
renderProducts(productList);