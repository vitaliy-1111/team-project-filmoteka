import { fetchMovieById } from './fetch.js';
import { renderLibraryGallaryQueue, renderLibraryGallaryWatched, renderEmptyGallery } from './renderLibrary.js';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
    width: '300px',
    position: 'right-top',
    distance: '30px',
    opacity: 1,
    borderRadius: '5px',
    timeout: 1000,
})

export function addToLocalStorage() {
  let watchedList = [];
  let queueList = [];
  document.querySelector("body").addEventListener("click", onBody);
  function onBody(e) {
    if (e.target.classList.contains("button-queue")) {
      addMovieToQueueLocalStorage(e.target.id);
      e.target.textContent = 'added to queue';
      
    }
    if (e.target.classList.contains("button-watched")) {
      addMovieToWatchedLocalStorage(e.target.id);
      e.target.textContent = 'added to watched';
      
    }
   if (e.target.classList.contains("button-watched--deleted")) {
     onDeleteWatchedButton(e.target.id);
     Notiflix.Notify.info('You successfully deleted the movie');
  }
   if (e.target.classList.contains("button-queue--delete")) {
     onDeleteQueueButton(e.target.id);
     Notiflix.Notify.info('You successfully deleted the movie');
   }
  }
  function addMovieToWatchedLocalStorage(id) {
    const localWatchedList = JSON.parse(localStorage.getItem("watchedList"));
    localWatchedList === null ? localWatchedList : watchedList = [...localWatchedList];
  
    if (!(watchedList.find(item => item.id == id) && true) || false) {
      fetchMovieById(id).then(resp => {
        watchedList.push(resp);
        localStorage.setItem("watchedList", JSON.stringify(watchedList));
        Notiflix.Notify.success('You enjoy movie successfully');
      })
    }
  }
  function addMovieToQueueLocalStorage(id) {
    const localQueueList = JSON.parse(localStorage.getItem("queueList"));
    localQueueList === null ? localQueueList : queueList = [...localQueueList];

    if (!(queueList.find(item => item.id == id) && true) || false) {
      fetchMovieById(id).then(resp => {
        queueList.push(resp);
        localStorage.setItem("queueList", JSON.stringify(queueList));
        Notiflix.Notify.success('You enjoy movie successfully');
      })
    }
  }
   function onDeleteWatchedButton(id) {
          let localMovies = JSON.parse(localStorage.getItem("watchedList"));
         
          localMovies = localMovies.filter((movie) => movie.id != id);
          
          localStorage.setItem("watchedList", JSON.stringify(localMovies));
          localMovies = JSON.parse(localStorage.getItem("watchedList"));
       
        if (localMovies === null || localMovies.length === 0) {
      renderEmptyGallery("watched");
    } else {
      renderLibraryGallaryWatched(localMovies);
  }
      }

      function onDeleteQueueButton(id) {    
       
        let localMovies = JSON.parse(localStorage.getItem("queueList"));
        localMovies = localMovies.filter((movie) => movie.id != id);
        localStorage.setItem("queueList", JSON.stringify(localMovies));
        localMovies = JSON.parse(localStorage.getItem("queueList"));
if (localMovies === null || localMovies.length === 0) {
      renderEmptyGallery("queue");
    } else {
      renderLibraryGallaryQueue(localMovies);
    }
}
}