// Burger
const burgerButton = document.querySelector('.burger');
const navigationBlock = document.querySelector('.navigation');
const overlay = document.querySelector('.burger-overlay');

burgerButton.addEventListener('click', openBurgerMenu);
overlay.addEventListener('click', closeBurgerMenu);
navigationBlock.addEventListener('click', closeBurgerMenu);

function openBurgerMenu() {
    navigationBlock.classList.toggle('open');
    burgerButton.classList.toggle('opened');
    overlay.classList.toggle('shown');
}

function closeBurgerMenu() {
    navigationBlock.classList.remove('open');
    burgerButton.classList.remove('opened');
    overlay.classList.remove('shown');
}

// Radios
const radioButtons = document.querySelectorAll('.radios__item');
const prices = document.querySelectorAll('.price');
let input = document.querySelector('.another-amount__input');

radioButtons[5].classList.add('active-dot');
prices[5].classList.add('text-orange');

radioButtons.forEach((button, index) => button.addEventListener('click', (e) => {
    if(e.target.classList.contains('active-dot')) {
        return;
    } else {
        for(let radio of radioButtons) {
            if(radio.classList.contains('active-dot')) {
                radio.classList.remove('active-dot');
            }
        }
        for(let price of prices) {
            if(price.classList.contains('text-orange')) {
                price.classList.remove('text-orange');
            }
        }
        e.target.classList.add('active-dot'); 
        prices[index].classList.add('text-orange'); 
        input.value = +prices[index].innerHTML.slice(1);
    }
}))

