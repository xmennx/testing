import validCreditCard from './validator';
import paymentSystem from './card';

const card = document.querySelector('.input');
const submit = document.querySelector('.submit');
const cards = [...document.querySelectorAll('.card')];

function checkCard() {
  if (card.value === '') {
    return false;
  }

  cards.forEach((el) => {
    if (el.className.includes('nocard')) {
      el.classList.remove('nocard');
    }
  });

  if (validCreditCard(card.value)) {
    card.classList.remove('invalid');
    card.classList.add('valid');
    const type = paymentSystem(card.value);

    cards.forEach((el) => {
      if (!el.className.includes(type)) {
        el.classList.add('nocard');
      }
    });
    return true;
  }
  card.classList.remove('valid');
  card.classList.add('invalid');

  return false;
}

submit.addEventListener('click', (event) => {
  event.preventDefault();
  checkCard();
});

card.addEventListener('input', () => {
  if (card.value === '') {
    cards.forEach((el) => {
      if (el.className.includes('nocard')) {
        el.classList.remove('nocard');
      }
    });
  }
});
