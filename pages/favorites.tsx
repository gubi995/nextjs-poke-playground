import { useState } from 'react';
import dynamic from 'next/dynamic';

const FavoritePokemons = dynamic(() => import('../components/FavoritePokemons'), { loading: () => <p>⏳</p> });

const NoFavoritePokemonAvailable = () => (
  <h3 style={{ margin: '5em', textAlign: 'center' }}>Seem like you have no favorite pokemon yet. 🤦‍♂️</h3>
);

const Favorites = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setToggle((prevState) => !prevState);
        }}
      >
        Show
      </button>
      {toggle ? <NoFavoritePokemonAvailable /> : <FavoritePokemons pokemons={[]} />}
    </>
  );
};

export default Favorites;
