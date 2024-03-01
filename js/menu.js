const iconoHamburger = document.querySelector('.iconHanburger');
const iconoClose = document.querySelector('.iconClose');

const menuMobile = document.querySelector('.menu-mobile');

iconoHamburger.addEventListener('click', openMenuMobile);
iconoClose.addEventListener('click', closeMenuMobile);

function openMenuMobile(){
    menuMobile.classList.remove('inactive');
}

function closeMenuMobile(){
    menuMobile.classList.add('inactive');
}



