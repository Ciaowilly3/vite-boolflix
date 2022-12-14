<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-2" v-for="movie in store.filmsArray">
        <SingleCard :movie="movie"></SingleCard>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-2" v-for="serie in store.seriesArray">
        <SingleCard :serie="serie"></SingleCard>
      </div>
    </div>
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
