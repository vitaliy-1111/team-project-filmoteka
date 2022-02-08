
// const refs = {
//     modalCard: document.querySelector(".card-item")
// };


// export function renderModalCinemaCard(cinema) {
//     const cinemaCard = results.map(
//         ({ title, id, poster_path, release_date, genre_ids }) => {
//             return `<div class="cinema-card">
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
//                         <p class="rating-value"> <span class="current-value">10</span> <span class="slash">/</span> 10</p>
//                         <p class="rating-value">10</p>
//                         <p class="rating-value">title</p>
//                         <p class="rating-value">${genre_ids}</p>
//                     </div>
//                 </div>

//                 <div class="about">
//                     <h2 class="about-title">TITLE</h2>
//                     <p class="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat amet maxime est, inventore et officia nisi obcaecati accusantium! Suscipit facilis itaque voluptatem laudantium ipsam aut at amet reprehenderit! Doloremque, iure.</p>
//                 </div>

//                 <div class="modal-buttons-container">
//                     <button class="modal-button button-watched">ADD TO WATCHED</button>
//                     <button class="modal-button">ADD TO QUEUE</button>
//                 </div>
//             </div>
//     </div>`}).join(' ');

//       refs.modalCard.innerHTML = cinemaCard;
// }