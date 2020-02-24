import Link from 'next/link';
import styled from 'styled-components';

import Pokemon from '../models/pokemon';
import FavoriteButton from './FavoriteButton';

const StyledLink = styled.li`
  padding: 1em;
`;

const StyledName = styled.span`
  text-transform: uppercase;
`;

const StyledLinkContent = styled.span`
  display: flex;
  align-items: center;

  & > * {
    text-decoration-line: none;
    margin: 0 0.5em;
  }
`;

interface Props {
  pokemon: Pokemon;
}

const PokemonLink = ({ pokemon }: Props) => {
  const pokemonId = pokemon.url
    .split('/')
    .filter(Boolean)
    .pop();

  return (
    <StyledLink>
      <StyledLinkContent>
        <StyledName> {pokemon.name} </StyledName>
        <Link href={'pokemon/[id]'} as={`pokemon/${pokemonId}`}>
          <a>👉 More details 👈</a>
        </Link>
        <FavoriteButton favorite={pokemon.favorite} />
      </StyledLinkContent>
    </StyledLink>
  );
};

export default PokemonLink;
