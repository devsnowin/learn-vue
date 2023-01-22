<script>
export default {
  props: ['dogs'],
  computed: {
    dogStatistics() {
      const breeds = [
        'Goldendoodle',
        'PitBull',
        'Weimaraner',
        'Boxer',
        'Havanese',
      ];
      const statistics = {
        Havanese: 0,
        Boxer: 0,
        Weimaraner: 0,
        PitBull: 0,
        Goldendoodle: 0,
      };
      this.dogs.forEach((dog) => {
        breeds.forEach((breed) => {
          if (breed === dog.breed) {
            statistics[breed] += 1;
          }
        });
      });
      return statistics;
    },
  },
};
</script>

<template>
  <h1>Statistics</h1>
  <p v-for="(stat, type) in dogStatistics" :key="type" class="items">
    {{ type }} : {{ stat }}
  </p>
</template>
