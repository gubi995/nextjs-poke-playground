import styled from 'styled-components';

const StyledImg = styled.img`
  display: block;
  height: auto;
  width: 70%;
  margin: 1em auto;
`;

const Index = () => {
  return (
    <div>
      <StyledImg src="/home-page-logo.png" alt="Home page logo should go here..." />
      <h1>Hi there!</h1>
      <br />
      <p>
        This is a Next.JS app where the developer is trying out the framework's features using a public pokemon API.
      </p>
      <br />
      <p>Other than that the project's style is enhanced with Styled Component lib for the sake of learning as well.</p>
    </div>
  );
};

export default Index;
