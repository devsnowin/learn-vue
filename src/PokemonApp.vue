<script>
import BaseButton from './components/BaseButton.vue';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export default {
  data: () => ({
    pokedex: [],
  }),
  methods: {
    async fetchPokemon() {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data.results);
      this.pokedex = data.results;
    },
  },
  components: { BaseButton },
};
</script>

<template>
  <h1>Pokemon API</h1>
  <pre>{{ pokedex }}</pre>
  <BaseButton @click="fetchPokemon">Fetch</BaseButton>
</template>

<style scoped>
button {
  width: fit-content;
}
</style>
