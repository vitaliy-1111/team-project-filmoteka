import { fetchMovieById } from './fetch.js';
import { renderLibraryGallaryQueue,renderLibraryGallaryWatched, renderEmptyGallery} from './renderLibrary.js';
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
  }
   if (e.target.classList.contains("button-queue--delete")) {
    onDeleteQueueButton(e.target.id);
   }
  }
  function addMovieToWatchedLocalStorage(id) {
    const localWatchedList = JSON.parse(localStorage.getItem("watchedList"));
    localWatchedList === null ? localWatchedList : watchedList = [...localWatchedList];
  
    if (!(watchedList.find(item => item.id == id) && true) || false) {
      fetchMovieById(id).then(resp => {
        watchedList.push(resp);
        localStorage.setItem("watchedList", JSON.stringify(watchedList));
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
      })
    }
  }
   function onDeleteWatchedButton(id) {
          let localMovies = JSON.parse(localStorage.getItem("watchedList"));
          console.log(localMovies);
          localMovies = localMovies.filter((movie) => movie.id != id);
          console.log(localMovies)
          localStorage.setItem("watchedList", JSON.stringify(localMovies));
          localMovies = JSON.parse(localStorage.getItem("watchedList"));
        console.log(localMovies)
        if (localMovies === null) {
      renderEmptyGallery();
    } else {
      renderLibraryGallaryWatched(localMovies);
  }
      }

      function onDeleteQueueButton(id) {    
       
        let localMovies = JSON.parse(localStorage.getItem("queueList"));
        localMovies = localMovies.filter((movie) => movie.id != id);
        localStorage.setItem("queueList", JSON.stringify(localMovies));
        localMovies = JSON.parse(localStorage.getItem("queueList"));
if (localMovies === null) {
      renderEmptyGallery();
    } else {
      renderLibraryGallaryQueue(localMovies);
    }
}
}