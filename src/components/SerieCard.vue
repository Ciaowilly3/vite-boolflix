<template>
  <div class="card-container">
    <img :src="imageCreator" alt="" class="w-100 d-block" />

    <div class="info-container">
      <h5 class="text-center my-3 fs-4">{{ serie.name }}</h5>
      <ul>
        <li>Titolo originale: {{ serie.original_name }}</li>

        <li>
          Lingua originale:
          <span :class="flagCreator"></span>
        </li>

        <li>
          Media dei voti su TMDB: {{ serie.vote_average
          }}<i
            class="fa-star"
            v-for="star in starBuilder"
            :class="{
              fa: star === true,
              'fa-regular': star === false,
              'fa-solid fa-star fa-star-half-stroke': star === 'half',
            }"
          ></i>
        </li>
      </ul>
      <h6 class="text-center mt-3 mb-2 fs-5">Overview</h6>
      <div class="p-container">
        <p class="text-center mx-1" v-if="serie.overview">
          {{ serie.overview }}
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
    serie: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
  computed: {
    imageCreator() {
      if (!this.serie.poster_path) {
        return "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restroom-out-of-order-door-sign-printable-design-template-cc665dd6f85fc0e9a7f116e283acc820_screen.jpg?ts=1637013157";
      }
      return "https://image.tmdb.org/t/p/" + "w342" + this.serie.poster_path;
    },
    flagCreator() {
      // inserisco una sfilza di if per gestire i linguaggi non inserito con il codice alpha 2 usato dalla mia npm
      if (this.serie.original_language === "en") {
        this.serie.original_language = "gb";
      }
      if (this.serie.original_language === "ja") {
        this.serie.original_language = "jp";
      }
      if (this.serie.original_language === "ko") {
        this.serie.original_language = "kr";
      }
      if (this.serie.original_language === "hi") {
        this.serie.original_language = "in";
      }
      return "fi fi-" + this.serie.original_language;
    },
    starBuilder() {
      const toReturn = [];
      const rawVote = this.serie.vote_average;
      const halfVote = Math.floor(rawVote / 2);
      const decimal = (rawVote / 2) % 1;
      for (let i = 0; i < 5; i++) {
        let toPush = i < halfVote;
        if (halfVote === i && decimal) {
          toPush = "half";
        }
        toReturn.push(toPush);
      }
      return toReturn;
    },
  },
};
</script>
