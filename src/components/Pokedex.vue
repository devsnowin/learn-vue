<script setup>
import { getPokedex } from '@/composable/store';
import { fetcher } from '@/lib/fetcher';
import { reactive } from 'vue';

const state = reactive({
  pokedex: [],
});

(async () => {
  const pokedex = await fetcher('/?limit=50');
  console.log(pokedex.results);
  state.pokedex = pokedex.results;
})();
</script>

<template>
  <h1
    class="pokemon"
    v-for="(pokemon, i) in state.pokedex"
    :pokemon="pokemon"
    :key="`pokemon-${i}`"
  >
    <router-link :to="`/pokemon/${pokemon.name}`">
      {{ pokemon.name }}
    </router-link>
  </h1>
</template>

<style scoped>
.pokemon {
  display: inline;
  width: fit-content;
  font-size: 1em;
  border: 2px solid hsla(160, 100%, 37%, 1);
  border-radius: 10px;
  padding: 0.2rem 1rem;
}

a {
  color: #fff;
}

a:hover {
  background: transparent;
}
</style>
