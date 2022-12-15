<template>
  <div
    class="container-fluid bg-dark d-flex align-items-center justify-content-between"
  >
    <h1 class="text-danger py-2">BOOLFLIX</h1>
    <div class="form-container">
      <form action="" class="d-flex gap-4 me-2" @submit.prevent="startSearch()">
        <div class="form-group">
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            v-model="filters.name"
          />
        </div>
        <button type="submit" class="btn btn-secondary text-white">
          Cerca
        </button>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
h1 {
  font-size: 52px;
  font-weight: 400;
}
</style>
<script>
export default {
  data() {
    return {
      filters: {
        name: "",
      },
    };
  },
  emits: ["search"],
  methods: {
    startSearch() {
      //   al click di enter parte l'emit per avvertire lo store di iniziare il fetch con i filtri inseriti
      this.$emit("search", { ...this.filters });
    },
  },
};
</script>
