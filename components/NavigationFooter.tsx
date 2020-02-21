import Link from 'next/link';
import styled from 'styled-components';

import StyledLink from './StyledLink';

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 0;
  z-index: 1000;
  background: ${(props) => props.theme.colors.primary};
  padding: 1em;
  box-shadow: 0 0px 5px 0px #ababab;
`;

const NavigationFooter = () => {
  return (
    <StyledFooter>
      <StyledLink href="/" text="Home" />
      <StyledLink href="/pokemons" text="Pokemons" />
    </StyledFooter>
  );
};

export default NavigationFooter;
