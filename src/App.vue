<template>
  <TheHeader @search="startFetch"></TheHeader>
  <div
    class="loader align-items-center justify-content-center"
    v-if="store.searched === false"
  >
    <h2>Esegui una ricerca per vederne i risultati</h2>
  </div>
  <CardsCreator></CardsCreator>
</template>

<style lang="scss">
@use "./styles/general.scss";
.loader {
  display: flex;
  background-color: black;
  color: white;

  width: 100vw;
  position: absolute;
  top: 86.4px;
  height: 100vh;
  h2 {
    font-size: 32px;
    animation-name: loader;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-delay: 5s;
  }
  @keyframes loader {
    0% {
      color: white;
      rotate: 0deg;
    }
    10% {
      color: royalblue;
      rotate: 90deg;
    }
    20% {
      color: violet;
      rotate: 180deg;
    }
    30% {
      color: greenyellow;
      rotate: 270deg;
    }
    40% {
      color: burlywood;
      rotate: 360deg;
    }
    100% {
      color: white;
      rotate: 360deg;
    }
  }
}
</style>

<script>
import TheHeader from "./components/TheHeader.vue";
import CardsCreator from "./components/CardsCreator.vue";
import { store, fetchFilm } from "./store";

export default {
  components: { TheHeader, CardsCreator },
  data() {
    return {
      store,
    };
  },
  methods: {
    startFetch(givenFilters) {
      // console.log("app " + givenFilters.name);
      fetchFilm(givenFilters);
    },
  },
};
</script>
