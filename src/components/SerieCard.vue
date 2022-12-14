<template>
  <div class="poster-container">
    <img :src="imageCreator(serie.poster_path)" alt="" class="w-100 d-block" />
    <div class="info-container d-none">
      {{ serie.name }}
      Titolo originale: {{ serie.original_name }}

      Lingua originale:
      <span :class="flagCreator(serie.original_language)"></span>

      Media dei voti su TMDB: {{ serie.vote_average }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
.poster-container {
  width: 100%;
}
</style>
<script>
import { store } from "../store";
export default {
  props: {
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
      return "https://image.tmdb.org/t/p/" + "w342" + url;
    },
  },
};
</script>
