<script>
import { reactive } from 'vue';
import Pokedex from './components/Pokedex.vue';
import { name } from './composable/store';
export default {
  components: { Pokedex },
  setup() {
    const state = reactive({
      newName: '',
    });

    function changeName() {
      name.value = state.newName;
      state.newName = '';
    }

    return {
      name,
      state,
      changeName,
    };
  },
};
</script>

<template>
  <div class="header">
    <h1>Pokemon API</h1>
    <h2>Logged in as : {{ name }}</h2>
  </div>
  <div class="input-form">
    <input
      type="text"
      placeholder="Your name"
      v-model="state.newName"
      @keyup.enter="changeName"
    />
  </div>
  <div class="pokedex">
    <Suspense>
      <Pokedex />
      <template v-slot:fallback> loading..... </template>
    </Suspense>
  </div>
</template>

<style scoped>
h1,
h2 {
  text-align: center;
  margin-block: 1rem;
}

button {
  width: fit-content;
}

.header {
  display: flex;
  justify-content: space-between;
  padding-inline: 4rem;
  align-items: center;
}

.input-form {
  width: 100%;
  margin-block: 2rem;
  display: grid;
  place-items: center;
}

input {
  width: 100%;
  max-width: 20rem;
  padding: 0.8rem;
  background-color: #222222;
  color: #fff;
  border: 0;
  outline: none;
}

input:focus {
  outline: 2px solid hsla(160, 100%, 37%, 1);
}

.pokedex {
  max-width: 80rem;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
