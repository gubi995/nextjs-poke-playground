import Pokemon from '../models/pokemon';

interface Props {
  pokemons: Pokemon[];
}

const FavoritePokemons = ({ pokemons }: Props) => {
  return (
    <>
      <h3>Your favorite pokemons: </h3>
      <ul>
        {pokemons.map((pokemon) => (
          <li>
            {pokemon.name} <img src={pokemon.imageUrl} alt={`${pokemon.name} image`} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FavoritePokemons;
