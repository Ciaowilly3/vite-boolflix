<template>
  <!-- utilizzo un v-if per far sì che non si sdoppino le card con le variabili che serie e film hanno in comune -->
  <div class="card-container" v-if="movie.title">
    <img :src="imageCreator" alt="" class="w-100" />
    <div class="info-container">
      <h5 class="text-center my-3 fs-4">
        {{ movie.title }}
      </h5>
      <ul>
        <li><strong> Titolo originale:</strong> {{ movie.original_title }}</li>

        <li>
          <strong> Lingua originale:</strong>
          <span :class="flagCreator"></span>
        </li>

        <li>
          <strong> Media dei voti su TMDB: </strong> {{ movie.vote_average }}
          <i
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
        <p class="text-center mx-1" v-if="movie.overview">
          {{ movie.overview }}
        </p>
        <p v-else class="text-danger text-center fs-3">Overview unavailable!</p>
      </div>
    </div>
  </div>

  <div class="card-container" v-else>
    <img :src="imageCreator" alt="" class="w-100 d-block" />

    <div class="info-container">
      <h5 class="text-center my-3 fs-4">{{ movie.name }}</h5>
      <ul>
        <li>
          <strong> Titolo originale: {{ movie.original_name }}</strong>
        </li>

        <li>
          <strong> Lingua originale: </strong>
          <span :class="flagCreator"></span>
        </li>

        <li>
          <strong> Media dei voti su TMDB:</strong> {{ movie.vote_average
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
        <p class="text-center mx-1" v-if="movie.overview">
          {{ movie.overview }}
        </p>
        <p v-else class="text-danger text-center fs-3">Overview unavailable!</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
i {
  color: rgb(186, 177, 5);
}
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
  methods: {},
  computed: {
    // uso le computed
    // quì genero l'immagine thumb della card, in caso non ci sia ne uso una standard
    imageCreator() {
      if (!this.movie.poster_path) {
        return "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restroom-out-of-order-door-sign-printable-design-template-cc665dd6f85fc0e9a7f116e283acc820_screen.jpg?ts=1637013157";
      }
      return "https://image.tmdb.org/t/p/" + "w342" + this.movie.poster_path;
    },
    // faccio in modo che compaia l'icona della bandiera, per farlo devo cambiare il modo in cui sono scritti i linguaggi originali
    flagCreator() {
      // inserisco una sfilza di if per gestire i linguaggi non inserito con il codice alpha 2 usato dalla mia npm
      if (this.movie.original_language === "en") {
        this.movie.original_language = "gb";
      }
      if (this.movie.original_language === "ja") {
        this.movie.original_language = "jp";
      }
      if (this.movie.original_language === "ko") {
        this.movie.original_language = "kr";
      }
      if (this.movie.original_language === "hi") {
        this.movie.original_language = "in";
      }
      return "fi fi-" + this.movie.original_language;
    },
    // funzione che crea le stelle per far visualizzare il voto
    starBuilder() {
      const toReturn = [];
      const rawVote = this.movie.vote_average;
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
