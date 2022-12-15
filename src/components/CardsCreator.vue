<template>
  <div class="container-full">
    <h2>Film relativi alla ricerca:</h2>
    <div class="d-flex card-row">
      <div class="card-container" v-for="movie in store.filmsArray">
        <FilmCard :movie="movie"></FilmCard>
      </div>
    </div>
    <h2>Serie relative alla ricerca:</h2>
    <div class="d-flex card-row">
      <div class="card-container" v-for="serie in store.seriesArray">
        <SerieCard :serie="serie"></SerieCard>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-full {
  width: 100vw;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgb(173, 172, 172) 1%,
    rgba(0, 0, 0, 1) 2%,
    rgba(0, 0, 0, 1) 47%,
    rgba(255, 255, 255, 1) 49%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 52%,
    rgba(0, 0, 0, 1) 97%,
    rgba(255, 255, 255, 1) 100%
  );

  h2 {
    padding: 64px 48px;
    font-size: 48px;
    color: rgb(0 0 0);
    font-weight: 700;
    background-color: #000000;
    background-image: linear-gradient(360deg, #ffffff, #646262, #000000);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .card-row {
    overflow-x: auto;
    overflow-y: hidden;
    width: 100vw;
    align-items: center;
    gap: 96px;
    padding: 0px 48px 144px 48px;

    .card-container {
      flex-basis: 354px;
      flex-shrink: 0;
      height: 490px;
      overflow: hidden;
      border-radius: 16px;
    }
  }
}
</style>
<script>
import { store } from "../store";
import FilmCard from "./FilmCard.vue";
import SerieCard from "./SerieCard.vue";
export default {
  components: { FilmCard, SerieCard },
  data() {
    return {
      store,
    };
  },
};
</script>
