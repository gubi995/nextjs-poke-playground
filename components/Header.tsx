import styled from 'styled-components';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${(props) => props.theme.colors.primary};
  padding: 1em;
  box-shadow: 0 0px 5px 0px #ababab;
`;

const StyledText = styled.span`
  font-weight: bold;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledText>Pokemon playground with Next.JS</StyledText>
    </StyledHeader>
  );
};

export default Header;
