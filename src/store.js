import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  films: [],
});
export function fetchFilm(filters) {
  console.log("store " + filters.name);
  axios
    .get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "387492cbf4529b42ad2e62f79d42a1a9",
        query: filters.name,
        include_adult: true,
      },
    })
    .then((resp) => {
      store.films = resp;
      console.log(store.films);
    });
}
