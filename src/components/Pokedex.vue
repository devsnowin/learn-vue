<script setup>
import { reactive } from 'vue';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const state = reactive({
  pokedex: [],
});

async function fetchPokemon() {
  const res = await fetch(URL);
  const data = await res.json();
  return data.results;
}

state.pokedex = await fetchPokemon();
</script>

<template>
  <h1
    v-for="(pokemon, i) in state.pokedex"
    :pokemon="pokemon"
    :key="`pokemon-${i}`"
  >
    {{ pokemon.name }}
  </h1>
</template>

<style scoped>
h1 {
  display: inline;
  width: fit-content;
  border: 2px solid hsla(160, 100%, 37%, 1);
  border-radius: 10px;
  padding: 0.2rem 1rem;
  margin-block: 0.5rem;
}
</style>
