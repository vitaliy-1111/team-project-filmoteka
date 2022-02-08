import { allGenres, renderGenres } from './genres'


const refs = {
  cardList: document.querySelector('.card-list'),
  contentText: document.querySelector('.content')
}

export function MoviesCards (results){
  const markup = results.map(
    ({ title, id, poster_path, release_date, genre_ids, vote_average }) => {
      const genreName = renderGenres(genre_ids, allGenres)
       if (!release_date) {
        release_date = ' ';
      }
      const year = release_date.slice(0, 4) 
      let URL = 'https://image.tmdb.org/t/p/w500';
      if (poster_path === null) {
        URL = 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-%27;';
      }
           return `<li class="list card-item">
            <div class="image_thumb">
              <img class="image_thumb-img" src="${URL}${poster_path || ''}" alt="${title}" id="${id}" loading="lazy">
              <span class="content_average ${vote_average === 0 ? vote_average='visually-hidden' : vote_average}">${vote_average}</span>
            </div>              
            <div class="gallery-buttons">
              <button class="image-btn" id="${id}" data-type="watched">Watched</button>
              <button class="image-btn" id="${id}" data-type="queue">Queue</button>
              <button class="image-btn see-more" id="${id}" data-type="see more">See more...</button>
            </div>
            <div class="content">
              <h2 class="content_title">${title}</h2>
              <p class="content_text">${genreName} | ${year}</p>
            </div>  
        </li>`}).join(' ');
  refs.cardList.innerHTML = markup;
};



