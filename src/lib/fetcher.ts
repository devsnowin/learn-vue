const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetcher = async (query: string) => {
  const res = await fetch(`${BASE_URL}${query}`);

  const data = await res.json();
  console.log(data);
  return data;
};
