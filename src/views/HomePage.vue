<template>
  <main>
    <router-link to="/doggy">Doggy</router-link>
    <router-link to="/pokedex">Pokedex</router-link>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: calc(100vh - 20vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

a {
  width: 200px;
  padding-block: 0.4rem;
  text-align: center;
  font-size: 1.4em;
  font-weight: bold;
  color: white;
  border: 2px solid hsla(160, 100%, 37%, 1);
}

a:hover {
  background-color: hsla(160, 100%, 37%, 1);
}
</style>
