import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { fetchMovies } from './fetch-gallery';
import { MoviesCards } from './gallery-tpl';

const paginationOptions = {
  totalItems: 0,
  itemPerPage: 20,
  visiblePages: 4,
  page: 1,
};
const homePagination = new Pagination('#tui-pagination-container', paginationOptions);
const homepPaginationPage = homePagination.getCurrentPage();
const loader = document.querySelector('.gallery-spinner');
const pagination = document.querySelector('.tui-pagination');
pagination.classList.add('visually-hidden');

renderStartPage();

export function renderStartPage() {
  loader.classList.remove('visually-hidden');
  fetchMovies(homepPaginationPage).then(response => {
    homePagination.reset(response.total_pages);
    MoviesCards(response.results);
    loader.classList.add('visually-hidden');
    pagination.classList.remove('visually-hidden');
  });
  homePagination.on('afterMove', event => {
    loader.classList.remove('visually-hidden');
    const currentPage = event.page;
    fetchMovies(currentPage).then(response => {
      MoviesCards(response.results);
      loader.classList.add('visually-hidden');
    });
  });
}
