import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ApiServiceFetchMovies from './ApiServiceFetchMovies';
import { MoviesCards } from '../gallery/gallery-tpl';
import { renderStartPage } from '../gallery/render-page-gall';

const debounce = require('lodash.debounce');
const apiServiceFetchMovies = new ApiServiceFetchMovies();

const paginationOptions = {
  totalItems: 0,
  itemPerPage: 20,
  visiblePages: 4,
  page: 1,
};
const homePagination = new Pagination('#tui-pagination-container', paginationOptions);
const homepPaginationPage = homePagination.getCurrentPage();

const refs = {
  form: document.querySelector('#search-form'),
  error: document.querySelector('.form__error-message'),
};

refs.form.addEventListener('input', debounce(onSearch, 1000));

export function onSearch(e) {
  if (e.target.value.trim() === '') {
    refs.error.textContent = '';
    renderStartPage();
    return;
  }
  if (e.target.value.length < 3) {
    return;
  }
  apiServiceFetchMovies.query = e.target.value;
  renderSearchPage();
}

function renderSearchPage() {
  apiServiceFetchMovies.fetchMovies(homepPaginationPage).then(response => {
    if (response.results.length === 0) {
      refs.error.textContent = 'Nothing found for your request';
      return;
    }
    homePagination.reset(response.total_pages);
    MoviesCards(response.results);
    homePagination.on('afterMove', event => {
      apiServiceFetchMovies.currentPage = event.page;
      apiServiceFetchMovies.fetchMovies(event.page).then(response => MoviesCards(response.results));
    });
  });
}
