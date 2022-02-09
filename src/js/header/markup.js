import { allGenres, renderGenres } from './genresSearch';

const refs = {
  cardList: document.querySelector('.card-list'),
  contentText: document.querySelector('.content'),
};

export function markupLibrary() {
  return `<div class="container library-page-header__container">
    <div class="menu">
      <a href="" class="menu__logo link">
        <img
          alt="logo"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjgyIDJINC4xOEEyLjE4IDIuMTggMCAwIDAgMiA0LjE4djE1LjY0QTIuMTggMi4xOCAwIDAgMCA0LjE4IDIyaDE1LjY0QTIuMTggMi4xOCAwIDAgMCAyMiAxOS44MlY0LjE4QTIuMTggMi4xOCAwIDAgMCAxOS44MiAyWk03IDJ2MjBNMTcgMnYyME0yIDEyaDIwTTIgN2g1TTIgMTdoNU0xNyAxN2g1TTE3IDdoNSIgc3Ryb2tlPSIjODE4MTgxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=="
        />
        <span class="menu__logo-label">Filmoteka</span>
      </a>
      <ul class="menu__list list">
        <li class="menu__list-item">
          <a href="" class="menu__list-link menu__list-link--home  link"
            >Home</a>
        </li>
        <li class="menu__list-item">
          <a href="" class="menu__list-link menu__list-link--library menu__list-link--current link">My library</a>
        </li>
      </ul>
    </div>
    <div class="btn-box">
      <button class="library-btn library-watched">Watched</button>
      <button class="library-btn library-queue">Queue</button>
    </div>
  </div>`;
}

export function markupHome() {
  return `<div class="container page-header__container">
    <div class="menu">
      <a href="/" class="menu__logo link">
        <img
          alt="logo"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjgyIDJINC4xOEEyLjE4IDIuMTggMCAwIDAgMiA0LjE4djE1LjY0QTIuMTggMi4xOCAwIDAgMCA0LjE4IDIyaDE1LjY0QTIuMTggMi4xOCAwIDAgMCAyMiAxOS44MlY0LjE4QTIuMTggMi4xOCAwIDAgMCAxOS44MiAyWk03IDJ2MjBNMTcgMnYyME0yIDEyaDIwTTIgN2g1TTIgMTdoNU0xNyAxN2g1TTE3IDdoNSIgc3Ryb2tlPSIjODE4MTgxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=="
        />
        <span class="menu__logo-label">Filmoteka</span>
      </a>
      <ul class="menu__list list">
        <li class="menu__list-item">
         <a href="" class="menu__list-link menu__list-link--home menu__list-link--current link"
            >Home</a>
        </li>
        <li class="menu__list-item">
          <a href="" class="menu__list-link menu__list-link--library link">My library</a>
        </li>
      </ul>
    </div>
    <div class="form-box">
      <form class="form" id="search-form">
        <img
          class="form__icon"
          alt="search"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuNSA5LjVhNCA0IDAgMSAwIDAtOCA0IDQgMCAwIDAgMCA4Wk0xMC41IDEwLjUgOC4zMjUgOC4zMjUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+"
        />
        <input type="text" name="text" class="search" placeholder="Поиск фильмов" />
      </form>
      <span class="form__error-message"></span>
    </div>
  </div>`;
}

export function MoviesCards(results) {
  const markup = results
    .map(({ title, id, poster_path, release_date, genre_ids }) => {
      const genreName = renderGenres(genre_ids, allGenres);
      const year = String(release_date).slice(0, 4);

      return `<li class="list card-item">
            <a href="" class="link">
            <div class="image_thumb">
              <div class="image_thumb-img">
                <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" id="${id}" loading="lazy">
              </div>
              <div class="content">
                <h2 class="content_title">${title}</h2>
                <p class="content_text">${genreName} | ${year}</p>
              </div>
            </div>
            </a> 
        </li>`;
    })
    .join(' ');
  refs.cardList.innerHTML = markup;
}
