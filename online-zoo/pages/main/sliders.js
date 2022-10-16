import {animals} from './animals.js';
import {reviews} from './reviews.js';

const animalCards = document.querySelector('.animal-cards');
const animalsWrapper = document.querySelector('.cards-wrapper');
const buttonLeft = document.querySelector('.button_left');
const buttonRight = document.querySelector('.button_right');

let cardsOnPage = 6;

let slidesArray = [];
for(let i = 0; i < 3; i++) {
    let cardArray = createCards(cardsOnPage);
    slidesArray.push(cardArray);
}
slidesArray.forEach(slide => {
    const newSlide = createSlide(slide);
    animalCards.append(newSlide);
})

function createSlide(slide) {
    let newSlide = document.createElement('div');
    newSlide.classList.add('animal-cards__slide');
    for(let card of slide) {
        newSlide.append(card);
    }
    return newSlide;
}

let currentSlides = document.querySelectorAll('.animal-cards__slide');

let slideWidth = animalsWrapper.offsetWidth;
let offset = -1;

currentSlides.forEach(slide => {
    slide.style.left = offset * slideWidth + 'px';
    offset++;
});

buttonRight.addEventListener('click', moveCardsLeft);
buttonLeft.addEventListener('click', moveCardsRight);

function moveCardsLeft() {
    buttonRight.removeEventListener('click', moveCardsLeft);
    buttonLeft.removeEventListener('click', moveCardsRight);
    let slides = document.querySelectorAll('.animal-cards__slide');
    let curOffset = -1;
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.left = (curOffset * slideWidth) - slideWidth + 'px';
        curOffset++;
    }

    setTimeout(() => {
        let elToRemove = document.querySelector('.animal-cards__slide:first-child');
        elToRemove.parentElement.removeChild(elToRemove);
        const newCards = createCards(6);
        const newSlide = createSlide(newCards);
        newSlide.style.left = `${slideWidth}px`;
        animalCards.appendChild(newSlide);
        buttonRight.addEventListener('click', moveCardsLeft);
        buttonLeft.addEventListener('click', moveCardsRight);
    }, 1000);   
}

function moveCardsRight() {
    buttonLeft.removeEventListener('click', moveCardsRight);
    buttonRight.removeEventListener('click', moveCardsLeft);
    let slides = document.querySelectorAll('.animal-cards__slide');
    let curOffset = 0;
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.left = (curOffset * slideWidth)  + 'px';
        curOffset++;
    }

    setTimeout(() => {
        let elToRemove = document.querySelector('.animal-cards__slide:last-child');
        elToRemove.parentElement.removeChild(elToRemove);
        const newCards = createCards(6);
        const newSlide = createSlide(newCards);
        newSlide.style.left = `-${slideWidth}px`;
        animalCards.prepend(newSlide);
        buttonLeft.addEventListener('click', moveCardsRight);
        buttonRight.addEventListener('click', moveCardsLeft);
    }, 1000);   
}


function createCards(numberOfcards) {
    let indexArray = new Set();
    while(indexArray.size < numberOfcards) {
        indexArray.add(Math.floor(Math.random() * 7));
    }
    let cardsArray = [];
    indexArray.forEach(num => {
        const animalCard = createAnimalCard(animals[num]);
        cardsArray.push(animalCard); 
    })
    return cardsArray;
}


// Reviews
const reviewsContainer = document.querySelector('.testimonials__reviews');
const input = document.querySelector('.progress-bar');

initReviews();

input.addEventListener('input', () => {
    let interval = parseInt(input.value);
    const cardWidth = document.querySelectorAll('.review')[0].offsetWidth;
    reviewsContainer.style.left = `-${(interval * cardWidth) + (29 * interval)}px`;
})

function initReviews() {
    const randomNums = [];
    for(let i = 0; i < 12; i++) {
        randomNums.push(Math.floor(Math.random() * 10));
    }
    randomNums.forEach(num => {
        let newReview = createReview(reviews[num]);
        reviewsContainer.append(newReview);
    })
}


function createAnimalCard(animal) {

    const card = document.createElement('div');
    card.classList.add('animal-card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('animal-card__content');
    cardContent.style.background = `url(${animal.food}), #FFFFFF`;
    cardContent.style.backgroundPosition = `right 10px bottom 14px`;
    cardContent.style.backgroundRepeat = 'no-repeat';

    const image = document.createElement('div');
    image.classList.add('animal-card__image');

    const img = document.createElement('img');
    img.src = animal.image;
    image.appendChild(img);
    cardContent.appendChild(image);

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const overlayTitle = document.createElement('h5');
    overlayTitle.classList.add('overlay__title');
    overlayTitle.textContent = animal.title;
    overlay.appendChild(overlayTitle);

    const overlayDescription = document.createElement('p');
    overlayDescription.classList.add('overlay__description');
    overlayDescription.textContent = animal.description;
    overlay.appendChild(overlayDescription);
    image.appendChild(overlay);

    const text = document.createElement('div');
    text.classList.add('animal-card__text');

    const textTitle = document.createElement('h5');
    textTitle.classList.add('animal-card__title');
    textTitle.textContent = animal.title;
    text.appendChild(textTitle);

    const textDescription = document.createElement('p');
    textDescription.classList.add('animal-card__description');
    textDescription.textContent = animal.description;
    text.appendChild(textDescription);

    cardContent.appendChild(text);
    card.appendChild(cardContent);

    return card;
}

function createReview(review) {
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review');
    reviewCard.id = review.id;

    const content = document.createElement('div');
    content.classList.add('review__content');
    reviewCard.appendChild(content);

    const userInfo = document.createElement('div');
    userInfo.classList.add('review__user-info');

    const ava = document.createElement('div');
    ava.classList.add('user-info__ava');
    const img = document.createElement('img');
    img.src = review.ava;
    ava.appendChild(img);

    const usetText = document.createElement('div');
    usetText.classList.add('review__user-text');

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
    text.classList.add('review__text');
    text.innerHTML = review.text;

    content.appendChild(userInfo);
    content.appendChild(text);

    return reviewCard;
}
