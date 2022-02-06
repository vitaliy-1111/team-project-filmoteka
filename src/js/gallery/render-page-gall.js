import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { fetchMovies } from "./fetch-gallery";
import { MoviesCards } from "./gallery-tpl";

const paginationOptions = {
   totalItems: 0,
    itemPerPage: 20,
    visiblePages: 4,
    page: 1,
}
const homePagination = new Pagination('#tui-pagination-container', paginationOptions);
const homepPaginationPage = homePagination.getCurrentPage();

renderStartPage();

export function renderStartPage() {
    fetchMovies(homepPaginationPage).then(response => {
        homePagination.reset(response.total_pages);
        MoviesCards(response.results);
    })
    homePagination.on('afterMove', (event) => {
    const currentPage = event.page;
    fetchMovies(currentPage).then((response) => MoviesCards(response.results));
  });
}






 

