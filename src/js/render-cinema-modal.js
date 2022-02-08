import { allGenres, renderGenres } from './gallery/genres'

const refs = {
  cardList: document.querySelector('.card-list'),
  contentText: document.querySelector('.content')
};


export function renderModalCinemaCard(cinema) {
    const cinemaCard = cinema.map(
        ({ title, id, poster_path, genre_ids, vote_average, vote_count, popularity, overview }) => {
        const genreName = renderGenres(genre_ids)
            return `<div class="cinema-card">
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
                        <p class="rating-value">${genreName}</p>
                    </div>
                </div>

                <div class="about">
                    <h2 class="about-title">ABOUT</h2>
                    <p class="about-text">${overview}</p>
                </div>

                <div class="modal-buttons-container">
                    <button class="modal-button button-watched">ADD TO WATCHED</button>
                    <button class="modal-button">ADD TO QUEUE</button>
                </div>
            </div>
    </div>`}).join(' ');

      refs.modalCard.innerHTML = cinemaCard;
}