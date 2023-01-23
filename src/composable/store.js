import { fetcher } from '@/lib/fetcher';
import { ref } from 'vue';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const name = ref('Guest');
export const getPokedex = async () => {
  const pokedex = await fetcher(URL);

  return pokedex;
};
