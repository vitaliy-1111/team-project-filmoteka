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
      let URL = 'https://image.tmdb.org/t/p/w500';
      if (poster_path === null) {
        URL = 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/job267batch2-wit-064.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=ec497448932f99c1ab5490886b487134';
      }
        return `<li class="list card-item">
            <a href="" class="link">
            <div class="image_thumb">
              <div class="image_thumb-img">
                <img src="${URL}${poster_path || ''}" alt="${title}" id="${id}" loading="lazy">
                <span class="content_average">${vote_average}</span>
              </div>
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
            </a> 
        </li>`}).join(' ');
  refs.cardList.innerHTML = markup;
};



