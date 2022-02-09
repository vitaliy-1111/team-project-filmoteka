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

// refs.modal.addEventListener('click', onCloseModal);

// refs.cinemaModalCardOpen.addEventListener('click', openModal);
// // refs.cinemaModalCardClose.addEventListener('click', onCloseModal);

refs.body.addEventListener('click', onBody);

function onBody(e) {
  if (e.target.classList.contains('see-more')) {
    openModal(e);
    refs.modalOverlay.addEventListener('click', closeModal);
  }
}

function openModal(e) {
  refs.body.classList.add('onOpenModal');
  refs.modalOverlay.classList.remove('is-hidden');
  apiServiceFetchMovies.currentId = e.target.id;
  apiServiceFetchMovies.fetchModalCard().then(r => {
    markupModalCard(r);
    onCloseModal();
  });
  document.addEventListener('keydown', onModalEscPress);
}

function onCloseModal(e) {
  refs.cinemaModalClose.addEventListener('click', onModalClose);
}

function onModalClose() {
  refs.body.classList.remove('onOpenModal');
  refs.modalOverlay.classList.add('is-hidden');
  document.removeEventListener('keydown', onModalEscPress);
}

function closeModal(e) {
  if (e.target.classList.contains('modal-icon-close') || e.target.classList.contains('cinema-modal-overlay')) {
    onModalClose();
  }
}

function onModalEscPress(e) {
  if (e.code !== 'Escape') {
    return
  }
  onModalClose();
}