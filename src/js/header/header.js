import { markupLibrary, markupHome } from './markup';

const refs = {
  home: document.querySelector('.menu__list-link--home'),
  library: document.querySelector('.menu__list-link--library'),
  header: document.querySelector('.page-header'),
  logo: document.querySelector('.menu__logo'),
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
}

function onHome(e) {
  e.preventDefault();
  refs.header.innerHTML = markupHome();
  document.querySelector('.menu__list-link--home').addEventListener('click', onHome);
  document.querySelector('.menu__list-link--library').addEventListener('click', onLibrary);
  document.querySelector('.menu__logo').addEventListener('click', onHome);
}
