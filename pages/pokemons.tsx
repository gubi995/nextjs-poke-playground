import { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';

import { Button, PokemonLink } from '../components';
import { POKE_API_URL } from '../constants';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';

const ShowMorePokemonButton = styled(Button)`
  display: block;
  margin: auto;
`;

const StyledContainer = styled.div`
  margin-bottom: 4em;
`;

interface Props {
  pokemons: Pokemon[];
  nextPageUrl: string;
}

const Pokemons: NextPage<Props> = ({ pokemons, nextPageUrl }) => {
  const [pokemonsState, setPokemons] = useState(pokemons);
  const [nextPageUrlState, setNextPageUrl] = useState(nextPageUrl);

  const fetchNextPage = async () => {
    const { pokemons, nextPageUrl } = await PokemonService.fetchPokemons(nextPageUrlState);

    setPokemons((prevPokemons) => [...prevPokemons, ...pokemons]);
    setNextPageUrl(nextPageUrl);
  };

  return (
    <StyledContainer>
      <ul>
        {pokemonsState.map((pokemon) => (
          <PokemonLink key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
      <ShowMorePokemonButton onClick={fetchNextPage}>Show more pokemon</ShowMorePokemonButton>
    </StyledContainer>
  );
};

Pokemons.getInitialProps = async (): Promise<Props> => {
  return await PokemonService.fetchPokemons(POKE_API_URL);
};

export default Pokemons;
