import HomePage from './views/HomePage.vue';

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'pokedex',
    path: '/pokedex',
    // lazy load the page
    component: () => import('./views/PokedexPage.vue'),
  },
  {
    name: 'Doggy',
    path: '/doggy',
    // lazy load the page
    component: () => import('./views/DoggyPage.vue'),
  },
];
