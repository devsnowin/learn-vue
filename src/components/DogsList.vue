<script>
import BaseButton from './BaseButton.vue';

export default {
  props: {
    dogs: {
      type: Array,
      required: true,
    },
  },
  emits: ['add-to-fav'],
  components: { BaseButton },
};
</script>

<template>
  <h1>Dog Lists</h1>
  <div>
    <p v-for="dog in dogs" :key="dog.id" class="items">
      {{ dog.name }}
      <BaseButton style="width: fit-content" @click="$emit('add-to-fav', dog)">
        Add to Fav
      </BaseButton>
    </p>
  </div>
</template>
