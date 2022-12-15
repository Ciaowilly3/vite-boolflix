<template>
  <div class="card-container">
    <img :src="imageCreator(movie.poster_path)" alt="" class="w-100" />
    <div class="info-container">
      <h5 class="text-center my-3 fs-4">{{ movie.title }}</h5>
      <ul>
        <li>Titolo originale: {{ movie.original_title }}</li>

        <li>
          Lingua originale:
          <span :class="flagCreator(movie.original_language)"></span>
        </li>

        <li>Media dei voti su TMDB: {{ movie.vote_average }}</li>
      </ul>
      <h6 class="text-center mt-3 mb-2 fs-5">Overview</h6>
      <div class="p-container">
        <p class="text-center mx-1" v-if="movie.overview">
          {{ movie.overview }}
        </p>
        <p v-else class="text-danger text-center fs-3">Overview unavailable!</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card-container {
  width: 100%;
  position: relative;
  .p-container {
    overflow: auto;
    height: 50%;
  }
  img {
    object-position: top;
    display: block;
  }
  .info-container {
    width: 100%;
    height: 100%;
    background-color: aliceblue;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    li {
      margin: 4px 0;
      color: rgb(87, 80, 80);
    }
  }
}
.card-container:hover {
  img {
    display: none;
  }
  .info-container {
    display: block;
  }
}
</style>
<script>
import { store } from "../store";
export default {
  props: {
    movie: Object,
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
