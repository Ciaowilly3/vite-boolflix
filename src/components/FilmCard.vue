<template>
  <div class="container">
    <ul>
      <li v-for="movie in store.filmsArray">
        {{ movie.title }}
        <ul>
          <li>Titolo originale: {{ movie.original_title }}</li>
          <li>Lingua originale: {{ movie.original_language }}</li>
          <li>Media dei voti su TMDB: {{ movie.vote_average }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped></style>
<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>
