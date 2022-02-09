  let watchedList = [];
  let queueList = [];
export function renderEmptyGallery() {
  const gallery = `<li class="cinema-gallery__item">Empty LocalStorage</li>`;
  document.querySelector(".card-list").innerHTML = gallery;
}
export function renderLibraryGallaryWatched(results) {
  const markup = results.map(
    ({ title, id, poster_path, release_date, genres, vote_average }) => {
      
       if (!release_date) {
        release_date = ' ';
      }

      const year = release_date.slice(0, 4) 
      let URL = 'https://image.tmdb.org/t/p/w500';
      if (poster_path === null) {
        URL = 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-%27;';
      }
      const queue = checkLocalStorageQueue(id);
           return `<li class="list card-item">
            <div class="image_thumb">
              <img class="image_thumb-img" src="${URL}${poster_path || ''}" alt="${title}" id="${id}" loading="lazy">
              <span class="content_average ${vote_average === 0 ? vote_average='visually-hidden' : vote_average}">${vote_average}</span>
            </div>              
            <div class="gallery-buttons">
            <button class="image-btn button-queue" id="${id}" data-type="queue">${queue || 'add to Queue'}</button>
              <button class="image-btn button-watched--deleted" id="${id}" data-type="watched">delete from Watched</button>              
              <button class="image-btn see-more" id="${id}" data-type="see more">See more...</button>
            </div>
            <div class="content">
              <h2 class="content_title">${title}</h2>
              <p class="content_text">${genres.map(genre => genre.name).join(' ')} | ${year}</p>
            </div>  
        </li>`}).join(' ');
 document.querySelector(".card-list").innerHTML = markup; 
};
export function renderLibraryGallaryQueue(results) {
  const markup = results.map(
    ({ title, id, poster_path, release_date, genres, vote_average }) => {
      
       if (!release_date) {
        release_date = ' ';
      }
      const watched = checkLocalStorageWatched(id);
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
              <button class="image-btn button-watched" id="${id}" data-type="watched">${watched || 'add to Watched'}</button>
              <button class="image-btn button-queue--delete" id="${id}" data-type="queue">delete from Queue</button>
              <button class="image-btn see-more" id="${id}" data-type="see more">See more...</button>
            </div>
            <div class="content">
              <h2 class="content_title">${title}</h2>
              <p class="content_text">${genres.map(genre => genre.name).join(' ')} | ${year}</p>
            </div>  
        </li>`}).join(' ');
 document.querySelector(".card-list").innerHTML = markup; 
};

function checkLocalStorageWatched(id) {
  let localWatchedList = JSON.parse(localStorage.getItem("watchedList"));
  localWatchedList === null ? localWatchedList : watchedList = [...localWatchedList];
  if ((watchedList.find(item => item.id == id) && true) || false) {
    const watched = 'added to watched';
    return watched;
  }
}
function checkLocalStorageQueue(id){
  const localQueueList = JSON.parse(localStorage.getItem("queueList"));
  localQueueList === null ? localQueueList : queueList = [...localQueueList];
  if ((queueList.find(item => item.id == id) && true) || false) {
    const queue = 'added to queue';
    return queue;
  }
}