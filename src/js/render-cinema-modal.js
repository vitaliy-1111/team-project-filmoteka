import { allGenres, renderGenres } from './gallery/genres';
import { fetchMovies } from './gallery/fetch-gallery';
import { checkLocalStorageWatched, checkLocalStorageQueue } from './renderLibrary';

const refs = {
  cardList: document.querySelector('.card-item'),
  contentText: document.querySelector('.content'),
  modal: document.querySelector('.modal__cinema'),
};

// if (e.target.classList.contains('.see-more')) {

//     fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${keyAPI}&page=${page}`)
//         .then(resp => resp.json())
//   }

// export function renderModalCinemaCard({ title, id, poster_path, genre_ids, vote_average, vote_count, popularity, overview }) {

//            const cinemaCard = `<div class="cinema-card">
//         <img class="poster" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" id="${id}" loading="lazy" width="240" height="356">

//             <div class="description-container">
//                 <h1 class="cinema-title">${title}</h1>

//                 <div class="ratings-container">
//                     <div class="ratings">
//                         <p class="ratings-name">Vote / Votes  </p>
//                         <p class="ratings-name">Popularity  </p>
//                         <p class="ratings-name">Original Title </p>
//                         <p class="ratings-name">Genre  </p>
//                     </div>
//                     <div class="ratings-values">
//                         <p class="rating-value"> <span class="current-value">${vote_average}/span> <span class="slash">/</span> ${vote_count}</p>
//                         <p class="rating-value">${popularity}</p>
//                         <p class="rating-value">${title}</p>
//                         <p class="rating-value">${genre_ids}</p>
//                     </div>
//                 </div>

//                 <div class="about">
//                     <h2 class="about-title">ABOUT</h2>
//                     <p class="about-text">${overview}</p>
//                 </div>

//                 <div class="modal-buttons-container">
//                     <button class="modal-button button-watched">ADD TO WATCHED</button>
//                     <button class="modal-button">ADD TO QUEUE</button>
//                 </div>
//             </div>
//     </div>`

//       refs.modal.innerHTML = cinemaCard;
// }

export function renderModalCinemaCard() {
  fetch(
    `https://api.themoviedb.org/3/movie/522016?api_key=c54b9b3bc824900bd0fc655039f09ff1&language=en-US`,
  )
    .then(resp => resp.json())
    .then(
      ({ title, id, poster_path, genre_ids, vote_average, vote_count, popularity, overview }) => {
        console.log({
          title,
          id,
          poster_path,
          genre_ids,
          vote_average,
          vote_count,
          popularity,
          overview,
        });
        const cinemaCard = `<div class="cinema-card">
        <img class="poster" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" id="${id}" loading="lazy" width="240" height="356">
        
            <div class="description-container">
                <h1 class="cinema-title">${title}</h1>
            
                <div class="ratings-container">
                    <div class="ratings">
                        <p class="ratings-name">Vote / Votes  </p>
                        <p class="ratings-name">Popularity  </p>
                        <p class="ratings-name">Original Title </p>
                        <p class="ratings-name">Genre  </p>
                    </div>
                    <div class="ratings-values">
                        <p class="rating-value"> <span class="current-value">${vote_average}/span> <span class="slash">/</span> ${vote_count}</p>
                        <p class="rating-value">${popularity}</p>
                        <p class="rating-value">${title}</p>
                        <p class="rating-value">${genre_ids.join(" ")}</p>
                    </div>
                </div>

                <div class="about">
                    <h2 class="about-title">ABOUT</h2>
                    <p class="about-text">${overview}</p>
                </div>

                <div class="modal-buttons-container">
                    <button class="modal-button button-watched" id="${id}">ADD TO WATCHED</button>
                    <button class="modal-button button-queue" id="${id}">ADD TO QUEUE</button>
                </div>
            </div>
              </div>`;
        document.querySelector('.modal__cinema').innerHTML = cinemaCard;
      },
    );
}

export function markupModalCard(results) {
  const { title, id, poster_path, genres, vote_average, vote_count, popularity, overview } =
    results;
   let URL = 'https://image.tmdb.org/t/p/w500';
      if (poster_path === null) {
        URL = 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-%27;';
      }
  const watched = checkLocalStorageWatched(id);
  const queue = checkLocalStorageQueue(id);
  const genreName = genres.map(ganre => ganre.name);
  const murkup = `<div class="cinema-card">
  <img
      alt="close"
      class="modal-icon-close"
      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTggOCAxNCAxNE04IDIyIDIyIDgiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+"
    />
        <img class="poster" src="${URL}${poster_path || ''}" alt="${title}" id="${id}" loading="lazy" width="240" height="356">
        
            <div class="description-container">
                <h1 class="cinema-title">${title}</h1>
            
                <div class="ratings-container">
                    <div class="ratings">
                        <p class="ratings-name">Vote / Votes  </p>
                        <p class="ratings-name">Popularity  </p>
                        <p class="ratings-name">Original Title </p>
                        <p class="ratings-name">Genre  </p>
                    </div>
                    <div class="ratings-values">
                        <p class="rating-value"> <span class="current-value">${vote_average}</span> / ${vote_count}</p>
                        <p class="rating-value">${popularity}</p>
                        <p class="rating-value">${title}</p>
                        <p class="rating-value">${genreName.join(', ') || ' '}</p>
                    </div>
                </div>

                <div class="about">
                    <h2 class="about-title">ABOUT</h2>
                    <p class="about-text">${overview}</p>
                </div>

                <div class="modal-buttons-container">
                    <button class="modal-button button-watched" id="${id}" aria-label="watched">${watched || 'add to Watched'}</button>
                    <button class="modal-button button-queue" id="${id}" aria-label="queue">${queue || 'add to queue'}</button>
                </div>
                
            </div>
              </div>`;
  refs.modal.innerHTML = murkup;
}
