import cardsTpl from '../templates/cards.hbs';
import cards from '../menu.json';

const markup = cardsTpl(cards);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);