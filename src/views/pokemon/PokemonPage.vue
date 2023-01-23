<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { fetcher } from '../../lib/fetcher';

const route = useRoute();
const { name } = route.params;
const state = reactive({
  pokemonData: [],
});

(async () => {
  const data = await fetcher(`/${name}`);
  state.pokemonData = data;
})();
</script>

<template>
  <router-link to="/pokemon">Back</router-link>
  <main>
    <div v-if="state.pokemonData.length !== 0" class="pokemon-card">
      <img :src="`${state.pokemonData.sprites.front_default}`" alt="pokemon" />
      <div class="content">
        <p>ID: {{ state.pokemonData.id }}</p>
        <h1>{{ name }}</h1>
      </div>
    </div>
    <p v-else>Loading...</p>
  </main>
</template>

<style scoped>
a {
  margin-left: 8rem;
}

main {
  width: 100vw;
  height: calc(100vh - 20vh);
  display: grid;
  place-items: center;
}

.pokemon-card {
  width: 100%;
  max-width: 28rem;
  margin-inline: auto;
  padding-block: 0.8rem;
  padding-right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px solid hsla(160, 100%, 37%, 1);
}
</style>
