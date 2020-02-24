import { useState } from 'react';
import styled from 'styled-components';

import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import FavoriteButton from './FavoriteButton';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
`;

interface Props {
  pokemon: Pokemon;
}

const PokemonDetails = ({ pokemon }: Props) => {
  const { id, name, imageUrl, weight, types } = pokemon;
  const [favoriteState, setFavoriteState] = useState(pokemon.favorite);

  const favoriteHandler = async () => {
    if (favoriteState) {
      return;
    }

    const successful = await PokemonService.saveFavoritePokemon(pokemon);

    if (successful) {
      setFavoriteState(true);
    } else {
      console.error('Something went wrong during saving');
    }
  };

  return (
    <StyledContainer>
      <h1>
        {name} # {id}
      </h1>
      <img src={imageUrl} alt="Pokemon image" />
      <p>Weight: {weight}</p>
      <p>
        Types:{' '}
        {types.map((type) => (
          <span key={type}>{type} ⚡ </span>
        ))}
      </p>
      <FavoriteButton favorite={favoriteState} onClick={favoriteHandler} />
    </StyledContainer>
  );
};

export default PokemonDetails;
