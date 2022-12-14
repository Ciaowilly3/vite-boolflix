<template>
  <div class="container-full">
    <div class="d-flex card-row">
      <div class="card-container" v-for="movie in store.filmsArray">
        <SingleCard :movie="movie"></SingleCard>
      </div>
    </div>
    <h1 class="my-5">Serie</h1>
    <div class="d-flex card-row">
      <div class="card-container" v-for="serie in store.seriesArray">
        <SingleCard :movie="serie"></SingleCard>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-full {
  width: 100vw;

  .card-row {
    overflow-x: auto;
    overflow-y: hidden;
    height: 600px;
    width: 100vw;
    .card-container {
      flex-shrink: 0;
    }
  }
}
</style>
<script>
import { store } from "../store";
import SingleCard from "./SingleCard.vue";
export default {
  components: { SingleCard },
  data() {
    return {
      store,
    };
  },
};
</script>
