export function fetchMovieById(id) {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c54b9b3bc824900bd0fc655039f09ff1&language=en-US`)
    .then(resp => resp.json());
}