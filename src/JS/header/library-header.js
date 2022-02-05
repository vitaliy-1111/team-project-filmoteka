const refs = {
  watchedBtn: document.querySelector('[data-type="watched"]'),
  queueBtn: document.querySelector('[data-type="queue"]'),
  gallery: document.querySelector('.card-list'),
};

refs.watchedBtn.addEventListener('click', renderWatchedFilms);
refs.queueBtn.addEventListener('click', renderQueueFilms);

// function card() {
//   return `<li class="list card-item">
//             <a href="" class="link">
//             <div class="image_thumb">
//               <div class="image_thumb-img">
//                 <img src="https://image.tmdb.org/t/p/w500/vHla3Ej2m53rNmvmYkzvennLrKn.jpg"" alt="kino" id="5" loading="lazy">
//               </div>
//               <div class="content">
//                 <h2 class="content_title">KINO</h2>
//                 <p class="content_text">ZANR | 2222</p>
//               </div>
//             </div>
//             </a>
//         </li>`;
// }

// card();

// function addToWatched() {
//   localStorage.setItem('watched', card());
// }

// addToWatched();

function renderWatchedFilms() {
  const filmToInsert = localStorage.getItem('watched');

  refs.gallery.innerHTML = filmToInsert;
}

function renderQueueFilms() {
  const filmToInsert = localStorage.getItem('watched');

  refs.gallery.innerHTML = filmToInsert;
}
