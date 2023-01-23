<script setup>
import DogsList from '../components/DogsList.vue';
import DogForm from '../components/DogForm.vue';
import DogsStat from '../components/DogsStat.vue';
import FavoriteDogs from '../components/FavoriteDogs.vue';
</script>

<script>
export default {
  components: {
    DogsList,
    DogForm,
    DogsStat,
    FavoriteDogs,
  },
  data() {
    return {
      dogs: [
        {
          id: '1',
          name: 'Jimmy',
          breed: 'Havanese',
        },
        {
          id: '2',
          name: 'Tom',
          breed: 'Boxer',
        },
        {
          id: '3',
          name: 'Tessa',
          breed: 'Weimaraner',
        },
        {
          id: '4',
          name: 'Raser',
          breed: 'PitBull',
        },
        {
          id: '5',
          name: 'Goody',
          breed: 'Goldendoodle',
        },
      ],
      favorites: [],
    };
  },
  methods: {
    addNewDog(data) {
      if (!data || data.name === '' || data.breed === 'none') return null;
      const dog = {
        id: crypto.randomUUID(),
        ...data,
      };
      this.dogs.push(dog);
    },
    addToFavorites(dog) {
      const isalreadyExists = this.favorites.find(
        (favDog) => favDog.id === dog.id
      );
      if (isalreadyExists) return null;
      this.favorites.push(dog);
    },
    removeFromFavorites(id) {
      this.favorites = this.favorites.filter((dog) => dog.id !== id);
    },
  },
};
</script>

<style scoped>
main {
  width: 100%;
  height: calc(100vh - 20vh);
  padding-inline: 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 8rem;
}

section {
  width: 100%;
  margin-block: 4rem;
}

.left {
  width: 40%;
}
.right {
  width: 60%;
}

h1 {
  margin-block: 1rem;
}
</style>

<template>
  <main>
    <div class="left">
      <section>
        <DogForm :dogs="dogs" @add-dog="addNewDog" />
      </section>
      <section>
        <DogsList :dogs="dogs" @add-to-fav="addToFavorites" />
      </section>
    </div>
    <div class="right">
      <section>
        <DogsStat :dogs="dogs" />
      </section>
      <section>
        <FavoriteDogs
          :favorites="favorites"
          @remove-from-fav="removeFromFavorites"
        />
      </section>
    </div>
  </main>
</template>
