<template>
  <div class="container d-flex">
    <ul>
      <li v-for="movie in store.filmsArray">
        {{ movie.title }}
        <div class="poster-container">
          <img
            :src="imageCreator(movie.poster_path)"
            alt=""
            class="w-100 d-block"
          />
        </div>
        <ul>
          <li>Titolo originale: {{ movie.original_title }}</li>
          <li>
            Lingua originale:
            <span :class="flagCreator(movie.original_language)"></span>
          </li>
          <li>Media dei voti su TMDB: {{ movie.vote_average }}</li>
        </ul>
      </li>
    </ul>
    <ul>
      <li v-for="serie in store.seriesArray">
        {{ serie.name }}
        <div class="poster-container">
          <img
            :src="imageCreator(serie.poster_path)"
            alt=""
            class="w-100 d-block"
          />
        </div>
        <ul>
          <li>Titolo originale: {{ serie.original_name }}</li>
          <li>
            Lingua originale:
            <span :class="flagCreator(serie.original_language)"></span>
          </li>
          <li>Media dei voti su TMDB: {{ serie.vote_average }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.poster-container {
  width: 92px;
  object-fit: contain;
}
</style>
<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    flagCreator(lang) {
      // inserisco una sfilza di if per gestire i linguaggi non inserito con il codice alpha 2 usato dalla mia npm
      if (lang === "en") {
        lang = "gb";
      }
      if (lang === "ja") {
        lang = "jp";
      }
      if (lang === "ko") {
        lang = "kr";
      }
      if (lang === "hi") {
        lang = "in";
      }
      return "fi fi-" + lang;
    },
    imageCreator(url) {
      if (!url) {
        return "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restroom-out-of-order-door-sign-printable-design-template-cc665dd6f85fc0e9a7f116e283acc820_screen.jpg?ts=1637013157";
      }
      return "https://image.tmdb.org/t/p/" + "w92" + url;
    },
  },
};
</script>
