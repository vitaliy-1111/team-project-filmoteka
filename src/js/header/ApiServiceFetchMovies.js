const API_KEY = 'b49485b850e1a5911c943abe3524caa9';

export default class MoviesSearchApiService {
  constructor() {
    this.serchQuery = '';
    this.page = 1;
  }

  fetchPopularMovies() {
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`).then(
      response => response.json(),
    );
    // .then(response => response.results);
  }

  fetchMovies() {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.serchQuery}&include_adult=false`,
    )
      .then(response => response.json())
      .catch(error => error);
  }

  get currentPage() {
    return this.page;
  }

  set currentPage(newPage) {
    this.page = newPage;
  }

  get query() {
    return this.serchQuery;
  }
  set query(newQuery) {
    this.serchQuery = newQuery;
  }
}
