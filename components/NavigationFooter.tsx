import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1000;
  background: ${(props) => props.theme.colors.primary};
  padding: 1em;
  box-shadow: 0 0px 5px 0px #ababab;
`;

const NavigationFooter = () => {
  return <StyledFooter>Link1</StyledFooter>;
};

export default NavigationFooter;
