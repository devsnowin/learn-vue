import HomePage from './views/HomePage.vue';
import DoggyPage from './views/DoggyPage.vue';
import PokedexPageVue from './views/PokedexPage.vue';

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/pokedex',
    component: PokedexPageVue,
  },
  {
    path: '/doggy',
    component: DoggyPage,
  },
];
