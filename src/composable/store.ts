import { fetcher } from '@/lib/fetcher';
import { ref } from 'vue';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const name = ref('Guest');

export const getPokedex = async () => {
  const pokedex = await fetcher(`${BASE_URL}/?limit=50`);

  return pokedex.results;
};
