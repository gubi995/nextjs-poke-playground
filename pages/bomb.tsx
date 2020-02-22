import Error from './_error';

const Bomb = () => {
  const isBlowUp = Math.floor(Math.random() * 10) >= 5;

  return isBlowUp ? <Error statusCode={500} /> : <h1>You are a lucky guy</h1>;
};

export default Bomb;
