import {reviews} from './reviews.js';
// const reviews = [
//     {
//         id: 1,
//         ava: "../assets/images/Michael.png",
//         name: "Michael John",
//         location: "Local Austria",
//         time: "Today",
//         text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
//     },
//     {
//         id: 2,
//         ava: "../assets/images/Oskar.png",
//         name: "Oskar Samborsky",
//         location: "Local Austria",
//         time: "Yesterday",
//         text: "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
//     },
//     {
//         id: 3,
//         ava: "../assets/images/Frederika.png",
//         name: "Fredericka Michelin",
//         location: "Local Austria",
//         time: "Yesterday",
//         text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
//     },
//     {
//         id: 4,
//         ava: "../assets/images/Mila.png",
//         name: "Mila Riksha",
//         location: "Local Austria",
//         time: "Yesterday",
//         text: "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
//     },
//     {
//         id: 5,
//         ava: "../assets/images/Michael.png",
//         name: "Michael John",
//         location: "Local Austria",
//         time: "Today",
//         text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
//     },
//     {
//         id: 6,
//         ava: "../assets/images/Oskar.png",
//         name: "Oskar Samborsky",
//         location: "Local Austria",
//         time: "Yesterday",
//         text: "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
//     },
//     {
//         id: 7,
//         ava: "../assets/images/Frederika.png",
//         name: "Fredericka Michelin",
//         location: "Local Austria",
//         time: "Yesterday",
//         text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
//     },
//     {
//         id: 8,
//         ava: "../assets/images/Mila.png",
//         name: "Mila Riksha",
//         location: "Local Austria",
//         time: "Yesterday",
//         text: "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
//     }
// ]




// Burger menu
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

// Modals
const pageReviews = document.querySelectorAll('.review');
const modalOverlay = document.querySelector('.modal-overlay');

pageReviews.forEach(element => element.addEventListener('click', (e) => {
    const targetEl = e.target.parentElement.parentElement
    if(targetEl.classList.contains('review')) {
        for(let review of reviews) {
            if(targetEl.getAttribute('id') == review.id) {
                console.log('e')
                const newModal = createModal(review);
                modalOverlay.append(newModal);
                modalOverlay.classList.add('modal-shown');
                document.body.style.overflow = 'hidden';
            }
        }   
    }
}));

function createModal(review) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const content = document.createElement('div');
    content.classList.add('modal__content');
    modal.appendChild(content);

    const userInfo = document.createElement('div');
    userInfo.classList.add('modal__user-info');

    const ava = document.createElement('div');
    ava.classList.add('modal__ava');
    const img = document.createElement('img');
    img.src = review.ava;
    ava.appendChild(img);

    const usetText = document.createElement('div');
    usetText.classList.add('user-text');

    const userName = document.createElement('h5');
    userName.classList.add('user-text__name');
    userName.textContent = review.name;

    const userLocation = document.createElement('p');
    userLocation.classList.add('user-text__location');
    userLocation.innerHTML = `${review.location}&nbsp;&bull;<span class="user-text__time">&nbsp;&nbsp;${review.time}</span>`;

    usetText.appendChild(userName);
    usetText.appendChild(userLocation);

    userInfo.appendChild(ava);
    userInfo.appendChild(usetText);

    const text = document.createElement('p');
    text.classList.add('modal__text');
    text.innerHTML = review.text;

    content.appendChild(userInfo);
    content.appendChild(text);

    const modalButton = document.createElement('button');
    modalButton.classList.add('modal__button');
    modal.appendChild(modalButton);

    return modal;
}

modalOverlay.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal__button')) {
        closeModal();
        document.body.style.overflow = '';
    }
    e.preventDefault();
});

function closeModal() {
    modalOverlay.innerHTML = '';
    modalOverlay.classList.remove('modal-shown');
}
