<template>
  <TheHeader @search="startFetch"></TheHeader>
  <FilmCard></FilmCard>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

<script>
import TheHeader from "./components/TheHeader.vue";
import FilmCard from "./components/FilmCard.vue";
import { store, fetchFilm } from "./store";

export default {
  components: { TheHeader, FilmCard },
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
