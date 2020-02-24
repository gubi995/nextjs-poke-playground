import styled from 'styled-components';

import ActiveLink from './ActiveLink';

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
      <ActiveLink href="/" text="Home" />
      <ActiveLink href="/pokemons" text="Pokemons" />
      <ActiveLink href="/favorite" text="Favorite" />
      <ActiveLink href="/bomb" text="Bomb" />
    </StyledFooter>
  );
};

export default NavigationFooter;
