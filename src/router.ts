import HomePage from './views/HomePage.vue';

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'pokedex',
    path: '/pokemon',
    // lazy load the page
    component: () => import('./views/pokemon/PokedexPage.vue'),
  },
  {
    name: 'pokemon',
    path: '/pokemon/:name',
    // lazy load the page
    component: () => import('./views/pokemon/PokemonPage.vue'),
  },
  {
    name: 'Doggy',
    path: '/doggy',
    // lazy load the page
    component: () => import('./views/DoggyPage.vue'),
  },
];
