import { reactive } from "vue";
import axios from "axios";
export const store = reactive({});
export function fetchFilm(filters) {
  console.log("store " + filters.name);
}
