import {animals} from './animals';

const animalCards = document.querySelector('.animal-cards');



function createAnimalCard(animal) {

    const card = document.createElement('div');
    card.classList.add('animal-card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('animal-card__content');
    cardContent.style.background = `url(${animal.food}), ${$color-white}`;
    cardContent.style.backgroundPosition = `right 10px bottom 14px`;
    cardContent.style.backgroundRepeat = 'no-repeat';

    const image = document.createElement('div');
    image.classList.add('animal-card__image');

    const img = document.createElement('img');
    img.src = animal.image;
    image.appendChild(img);

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

    return card;
}