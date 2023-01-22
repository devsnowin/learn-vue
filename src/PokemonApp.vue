<script>
import Pokedex from './components/Pokedex.vue';
export default {
  components: { Pokedex },
};
</script>

<template>
  <h1>Pokemon API</h1>
  <div class="pokedex">
    <Suspense>
      <Pokedex />
      <template v-slot:fallback> loading..... </template>
    </Suspense>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-block: 1rem;
}

button {
  width: fit-content;
}

.pokedex {
  max-width: 80rem;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
