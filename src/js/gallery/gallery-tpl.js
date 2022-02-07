import { allGenres, renderGenres } from './genres'

const refs = {
  cardList: document.querySelector('.card-list'),
  contentText: document.querySelector('.content')
}

export function MoviesCards (results){
  const markup = results.map(
    ({ title, id, poster_path, release_date, genre_ids, vote_average }) => {
      const genreName = renderGenres(genre_ids, allGenres)
      const year = release_date.slice(0, 4) 
        return `<li class="list card-item">
            <a href="" class="link">
            <div class="image_thumb">
              <div class="image_thumb-img">
                <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" id="${id}" loading="lazy">
                <span class="content_average">${vote_average}</span>
              </div>
              <div class="gallery-buttons">
                <button class="image-btn" data-type="watched">Watched</button>
                <button class="image-btn" data-type="queue">Queue</button>
                <button class="image-btn see-more" data-type="see more">See more...</button>
              </div>
              <div class="content">
                <h2 class="content_title">${title}</h2>
                <p class="content_text">${genreName} | ${year}</p>
              </div>
            </div>
            </a> 
        </li>`}).join(' ');
  refs.cardList.innerHTML = markup;
};



