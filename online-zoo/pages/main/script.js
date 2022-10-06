const burgerButton = document.querySelector('.burger');
const navigationBlock = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');

burgerButton.addEventListener('click', openBurgerMenu);

function openBurgerMenu() {
    navigationBlock.classList.toggle('open');
    burgerButton.classList.toggle('opened');
    overlay.style.display = 'block';
}