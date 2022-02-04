import { fetchMovies } from "./fetch-gallery";
import { MoviesCards } from "./gallery-tpl";

renderStartPage();

export function renderStartPage() {
    fetchMovies().then(response => {
        response.results
        MoviesCards(response.results);
    })
}






 

