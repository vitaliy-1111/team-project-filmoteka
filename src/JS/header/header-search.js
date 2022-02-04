import ApiServiceFetchMovies from './ApiServiceFetchMovies';

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

function MoviesCards(results) {
  const markup = results
    .map(({ title, id, poster_path, release_date, genre_ids }) => {
      return `<li class="list card-item">
            <a href="" class="link"></a>
            <div class="image_thumb">
                <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" id="${id}" loading="lazy">
                <div class="content">
                <h2 class="content_title">${title}</h2>
                <p class="content_text">${genre_ids} | ${release_date}</p>
            </div>
            </div>
            
        </li>`;
    })
    .join(' ');
  refs.cardList.innerHTML = markup;
}
