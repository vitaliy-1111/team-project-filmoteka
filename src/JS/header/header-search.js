import ApiServiceFetchMovies from './ApiServiceFetchMovies';
import { MoviesCards } from '../gallery/gallery-tpl';

const debounce = require('lodash.debounce');
const apiServiceFetchMovies = new ApiServiceFetchMovies();

const refs = {
  form: document.querySelector('#search-form'),
  cardList: document.querySelector('.card-list'),
  error: document.querySelector('.form__error-message'),
};

refs.form.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  console.log(e.target.value);
  if (e.target.value.trim() === '') {
    refs.error.textContent = '';
    apiServiceFetchMovies.fetchPopularMovies().then(MoviesCards);
    return;
  }
  if (e.target.value.length < 3) {
    return;
  }

  apiServiceFetchMovies.query = e.target.value;
  apiServiceFetchMovies.fetchMovies().then(results => {
    if (results.length === 0) {
      refs.error.textContent = 'Nothing found for your request';
      return;
    }
    refs.error.textContent = '';
    MoviesCards(results);
  });
}
