<script>
import BaseButton from './BaseButton.vue';

export default {
  props: ['dogs'],
  data: () => ({
    newDog: {
      name: '',
      breed: 'none',
    },
  }),
  emits: ['add-dog'],
  components: { BaseButton },
};
</script>

<template>
  <h1>New Dog</h1>
  <div class="input-wrapper">
    <input
      v-model="newDog.name"
      type="text"
      name="name"
      id="name"
      placeholder="Enter new character"
      required
    />
    <select name="breed" id="breed" v-model="newDog.breed">
      <option value="none">Select the breed</option>
      <option value="Havanese">Havanese</option>
      <option value="Boxer">Boxer</option>
      <option value="PitBull">Pit Bull</option>
      <option value="Weimaraner">Weimaraner</option>
      <option value="Goldendoodle">Goldendoodle</option>
    </select>
    <BaseButton @click="$emit('add-dog', newDog)">Add new Dog</BaseButton>
  </div>
</template>

<style scoped>
.input-wrapper {
  width: 100%;
  max-width: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

input {
  width: 100%;
  background-color: transparent;
  color: #9f9f9f;
  font-size: 1.2em;
  outline: none;
  border: 0;
  border-bottom: 2px solid #eee;
  padding: 0.4rem;
}

select {
  width: 100%;
  background-color: transparent;
  color: #9f9f9f;
  outline: none;
  border: 2px solid #eee;
  padding: 0.4rem;
}
</style>
