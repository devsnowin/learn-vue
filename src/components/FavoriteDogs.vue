<script>
import BaseButton from './BaseButton.vue';

export default {
  props: ['favorites'],
  emits: ['remove-from-fav'],
  components: { BaseButton },
};
</script>

<template>
  <h1>Favorites</h1>
  <div v-if="favorites.length">
    <p v-for="favorite in favorites" :key="favorite.id" class="items">
      {{ favorite.name }}
      <BaseButton
        style="width: fit-content"
        @click="$emit('remove-from-fav', favorite.id)"
      >
        Remove
      </BaseButton>
    </p>
  </div>
  <p v-else>You have no favorites</p>
</template>
