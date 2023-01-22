<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  width: 100%;
  background-color: hsla(160, 100%, 37%, 1);
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 0.4rem 0.6rem;
}
</style>
