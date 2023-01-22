import Logo from '@/components/Logo.vue';

<template>
  <footer>
    <p>Made with Vue</p>
    <img src="../assets/logo.svg" alt="logo" />
  </footer>
</template>

<style scoped>
footer {
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
}

img {
  max-width: 20px;
}

p {
  font-weight: bold;
}
</style>
