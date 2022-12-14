<template>
  <TheHeader @search="startFetch"></TheHeader>
  <CardsCreator></CardsCreator>
</template>

<style lang="scss">
@use "./styles/general.scss";
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
