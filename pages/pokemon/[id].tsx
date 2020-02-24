import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetch from 'unfetch';

import { POKE_API_URL } from '../constants';
import PokemonDetails from '../../components/PokemonDetails';
import PokemonService from '../../services/pokemon-service';

const fetcher = async (path) => {
  const [res, favoritePokemon] = await Promise.all([await fetch(path), PokemonService.getFavoritePokemon()]);

  if (!res.ok) {
    throw new Error('Pokemon not found');
  }

  const pokemon = await res.json();

  if (pokemon.name === favoritePokemon?.name) {
    pokemon.favorite = true;
  }

  return pokemon;
};

const Pokemon = () => {
  const { id } = useRouter().query;
  const { data, error } = useSWR(`${POKE_API_URL}/${id}`, fetcher);

  if (error) {
    return <h1>Unexpected error: {error.message}</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  const name = data.name;
  const imageUrl = data.sprites.front_default;
  const weight = data.weight;
  const types = data.types.map((t) => t.type.name);
  const favorite = data.favorite;

  return (
    <PokemonDetails
      pokemon={{
        id: id as string,
        name,
        imageUrl,
        weight,
        types,
        favorite,
      }}
    />
  );
};

export default Pokemon;
