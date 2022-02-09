// import { MoviesCards } from './gallery/gallery-tpl';
// import { fetchMovies } from './gallery/fetch-gallery';
import ApiServiceFetchMovies from './header/ApiServiceFetchMovies';
import { markupModalCard } from './render-cinema-modal';
const apiServiceFetchMovies = new ApiServiceFetchMovies();

const refs = {
  body: document.querySelector('body'),
  modal: document.querySelector('.modal__cinema'),
  modalOverlay: document.querySelector('.cinema-modal-overlay'),
  cinemaModalCardOpen: document.querySelector('.card-list'),
  cinemaModalClose: document.querySelector('.modal-icon-close'),
};

refs.modal.addEventListener('click', onCloseModal);

refs.cinemaModalCardOpen.addEventListener('click', openModal);
// refs.cinemaModalCardClose.addEventListener('click', onCloseModal);

function openModal(e) {
  refs.body.classList.add('onOpenModal');
  refs.modalOverlay.classList.remove('is-hidden');
  apiServiceFetchMovies.currentId = e.target.id;
  apiServiceFetchMovies.fetchModalCard().then(markupModalCard);
}
function onCloseModal(e) {
  console.log(e);
  refs.body.classList.remove('onOpenModal');
  refs.modalOverlay.classList.add('is-hidden');
}

// function onCloseModal(e) {
//   console.log(e.traget);
//   refs.body.classList.remove('onOpenModal');
//   refs.modalOverlay.classList.add('is-hidden');
// }
