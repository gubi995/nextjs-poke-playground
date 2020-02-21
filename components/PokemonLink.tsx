import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.li`
  padding: 1em;
`;

const StyledName = styled.span`
  text-transform: uppercase;
`;

const StyledMoreDetail = styled.span`
  & > a {
    text-decoration-line: none;
  }
`;

interface Props {
  pokemon: { name: string; url: string };
}

const PokemonLink = ({ pokemon }: Props) => {
  const pokemonId = pokemon.url
    .split('/')
    .filter(Boolean)
    .pop();

  return (
    <StyledLink>
      <StyledName> {pokemon.name} </StyledName>
      <StyledMoreDetail>
        <Link href={'pokemon/[id]'} as={`pokemon/${pokemonId}`}>
          <a>👉 More details 👈</a>
        </Link>
      </StyledMoreDetail>
    </StyledLink>
  );
};

export default PokemonLink;
