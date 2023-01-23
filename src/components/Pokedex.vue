<script setup>
import { getPokedex } from '@/composable/store';
import { reactive } from 'vue';

const state = reactive({
  pokedex: [],
});

state.pokedex = await getPokedex();
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
