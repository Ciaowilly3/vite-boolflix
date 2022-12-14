<template>
  <ul>
    <li>
      {{ this.movie.title }}
      <div class="poster-container">
        <img
          :src="imageCreator(this.movie.poster_path)"
          alt=""
          class="w-100 d-block"
        />
      </div>
      <ul>
        <li>Titolo originale: {{ this.movie.original_title }}</li>
        <li>
          Lingua originale:
          <span :class="flagCreator(this.movie.original_language)"></span>
        </li>
        <li>Media dei voti su TMDB: {{ this.movie.vote_average }}</li>
      </ul>
    </li>
  </ul>
  <ul>
    <li>
      {{ serie.name }}
      <div class="poster-container">
        <img
          :src="imageCreator(this.serie.poster_path)"
          alt=""
          class="w-100 d-block"
        />
      </div>
      <ul>
        <li>Titolo originale: {{ this.serie.original_name }}</li>
        <li>
          Lingua originale:
          <span :class="flagCreator(this.serie.original_language)"></span>
        </li>
        <li>Media dei voti su TMDB: {{ this.serie.vote_average }}</li>
      </ul>
    </li>
  </ul>
</template>
<style lang="scss" scoped></style>
<script>
import { store } from "../store";
export default {
  props: {
    movie: Object,
    serie: Object,
  },
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
