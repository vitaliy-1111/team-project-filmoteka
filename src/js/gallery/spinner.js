const loader = document.querySelector('.loader');
const cardList = document.querySelector('.card-list')

export const spinner = function () {
  loader.classList.add('is-hidden');
  loader.classList.remove('is-hidden');
};

