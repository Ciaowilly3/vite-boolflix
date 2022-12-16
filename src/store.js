import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  filmsArray: [],
  seriesArray: [],
  searched: false,
});
// tramite questa funzione riempio sia filmsarray che seriesarray con due chiamate axios
export function fetchFilm(filters) {
  //   console.log("store " + filters.name);
  axios
    .get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "387492cbf4529b42ad2e62f79d42a1a9",
        query: filters.name,
        include_adult: true,
        language: "it-IT",
      },
    })
    .then((resp) => {
      store.filmsArray = resp.data.results;

      console.log(store.filmsArray);
      if (store.filmsArray.length === 20) {
        store.searched = true;
      }
    })
    .catch((resp) => {
      alert("la tua ricerca non ha portato a risultati, ricarica e riprova!");
      console.log(resp);
    });
  axios
    .get("https://api.themoviedb.org/3/search/tv", {
      params: {
        api_key: "387492cbf4529b42ad2e62f79d42a1a9",
        query: filters.name,
        include_adult: true,
        language: "it-IT",
      },
    })
    .then((resp) => {
      store.seriesArray = resp.data.results;

      console.log(store.seriesArray);
    })
    .catch((resp) => {
      alert("la tua ricerca non ha portato a risultati, ricarica e riprova!");
      console.log(resp);
    });
}
