import { markupLibrary, markupHome } from './markup';
import {
  renderLibraryGallaryQueue,
  renderLibraryGallaryWatched,
  renderEmptyGallery,
} from '../renderLibrary.js';
import { renderStartPage } from '../gallery/render-page-gall';
import { onSearch, renderSearchPage } from './header-search';

const debounce = require('lodash.debounce');

const refs = {
  home: document.querySelector('.menu__list-link--home'),
  library: document.querySelector('.menu__list-link--library'),
  header: document.querySelector('.page-header'),
  logo: document.querySelector('.menu__logo'),
  form: document.querySelector('#search-form'),
  error: document.querySelector('.form__error-message'),
};

refs.library.addEventListener('click', onLibrary);
refs.home.addEventListener('click', onHome);
refs.logo.addEventListener('click', onHome);

function onLibrary(e) {
  e.preventDefault();
  refs.header.innerHTML = markupLibrary();

  document.querySelector('.menu__list-link--library').addEventListener('click', onLibrary);
  document.querySelector('.menu__list-link--home').addEventListener('click', onHome);
  document.querySelector('.menu__logo').addEventListener('click', onHome);
  document.querySelector('.library-queue').addEventListener('click', onLibraryQueueBtn);
  document.querySelector('.library-watched').addEventListener('click', onLibraryWatchedBtn);
  document.querySelector('.library-watched').classList.add('library-button--active');
  document.querySelector('.tui-pagination').classList.add('visually-hidden');

  const localMovies = JSON.parse(localStorage.getItem('watchedList'));
  if (localMovies === null) {
    renderEmptyGallery();
  } else {
    renderLibraryGallaryWatched(localMovies);
  }
}

function onHome(e) {
  e.preventDefault();
  refs.header.innerHTML = markupHome();
  document.querySelector('.menu__list-link--home').addEventListener('click', onHome);
  document.querySelector('.menu__list-link--library').addEventListener('click', onLibrary);
  document.querySelector('.menu__logo').addEventListener('click', onHome);
  document.querySelector('#search-form').addEventListener('input', debounce(onSearch, 1000));
  renderStartPage();
}

function onLibraryQueueBtn() {
  document.querySelector('.library-queue').classList.add('library-button--active');
  document.querySelector('.library-watched').classList.remove('library-button--active');
  const localMovies = JSON.parse(localStorage.getItem('queueList'));
  if (localMovies === null) {
    renderEmptyGallery();
  } else {
    renderLibraryGallaryQueue(localMovies);
  }
}

function onLibraryWatchedBtn() {
  document.querySelector('.library-queue').classList.remove('library-button--active');
  document.querySelector('.library-watched').classList.add('library-button--active');
  const localMovies = JSON.parse(localStorage.getItem('watchedList'));
  if (localMovies === null) {
    renderEmptyGallery();
  } else {
    renderLibraryGallaryWatched(localMovies);
  }
}
