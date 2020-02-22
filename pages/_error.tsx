import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
`;

const StyledImage = styled.img`
  height: 150px;
  width: auto;
`;

const Error = ({ statusCode }) => {
  return (
    <StyledContainer>
      <StyledImage src="/error-image.jpg" alt="Error image" />
      <h4>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h4>
    </StyledContainer>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
