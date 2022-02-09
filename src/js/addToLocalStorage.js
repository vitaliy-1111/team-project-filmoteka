import { fetchMovieById } from './fetch.js';
export function addToLocalStorage() {
  let watchedList = [];
  let queueList = [];
  document.querySelector("body").addEventListener("click", onBody);
  function onBody(e) {
    if (e.target.classList.contains("button-queue")) {
      addMovieToQueueLocalStorage(e.target.id);
    }
    if (e.target.classList.contains("button-watched")) {
      addMovieToWatchedLocalStorage(e.target.id);
    }
  }
  function addMovieToWatchedLocalStorage(id) {
    console.log(JSON.parse(localStorage.getItem("watchedList")))
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
  // localStorage.removeItem("watchedList")
  // localStorage.removeItem("queueList");
}