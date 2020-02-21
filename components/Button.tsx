import styled from 'styled-components';

const Button = styled.button.attrs(() => ({ type: 'button' }))`
  background: white;
  color: blue;
  padding: 1em;
  border: 3px solid blue;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

export default Button;
