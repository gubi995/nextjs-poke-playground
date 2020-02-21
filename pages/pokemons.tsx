import { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

import { Button, PokemonLink } from '../components';
import { API_URL } from './constants';

const ShowMorePokemonButton = styled(Button)`
  display: block;
  margin: auto;
`;

const StyledContainer = styled.div`
  margin-bottom: 4em;
`;

interface Props {
  pokemons: { name: string; url: string }[];
  nextPageUrl: string;
}

const fetchPokemons = async (url: string): Promise<Props> => {
  const response = await fetch(url);
  const { results, next } = await response.json();

  return { pokemons: results, nextPageUrl: next };
};

const Pokemons: NextPage<Props> = ({ pokemons, nextPageUrl }) => {
  const [pokemonsState, setPokemons] = useState(pokemons);
  const [nextPageUrlState, setNextPageUrl] = useState(nextPageUrl);

  const fetchNextPage = async () => {
    const { pokemons, nextPageUrl } = await fetchPokemons(nextPageUrlState);

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
  return await fetchPokemons(API_URL);
};

export default Pokemons;
