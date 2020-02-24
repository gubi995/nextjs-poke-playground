import dynamic from 'next/dynamic';

import PokemonService from '../services/pokemon-service';
import Pokemon from '../models/pokemon';

const PokemonDetails = dynamic(() => import('../components/PokemonDetails'), { loading: () => <p>⏳</p> });

const NoFavoritePokemonAvailable = () => (
  <h3 style={{ margin: '5em', textAlign: 'center' }}>Seem like you have no favorite pokemon yet. 🤦‍♂️</h3>
);

interface Props {
  pokemon: Pokemon;
}

const Favorite = ({ pokemon }: Props) => {
  return (
    <>
      <h2 style={{ margin: '2em', textAlign: 'center' }}>Your favorite pokemon is:</h2>
      {pokemon ? <PokemonDetails pokemon={pokemon} /> : <NoFavoritePokemonAvailable />}
    </>
  );
};

Favorite.getInitialProps = async (): Promise<Props> => {
  const favoritePokemon = await PokemonService.getFavoritePokemon();
  return { pokemon: favoritePokemon };
};

export default Favorite;
