import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useSWR from 'swr';
import fetch from 'unfetch';

import { API_URL } from '../constants';
import { clearScreenDown } from 'readline';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
`;

const fetcher = async (path) => {
  const res = await fetch(path);

  if (!res.ok) {
    throw new Error('Pokemon not found');
  }

  return await res.json();
};

const Pokemon = () => {
  const { id } = useRouter().query;
  const { data, error } = useSWR(`${API_URL}/${id}`, fetcher);

  if (error) {
    return <h1>Unexpected error: {error.message}</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  const name = data.name;
  const imgSource = data.sprites.front_default;
  const weight = data.weight;
  const types = data.types.map((t) => t.type.name);

  return (
    <StyledContainer>
      <h1>
        {name} # {id}
      </h1>
      <img src={imgSource} alt="Pokemon image" />
      <p>Weight: {weight}</p>
      <p>
        Types:{' '}
        {types.map((type) => (
          <span key={type}>{type} ⚡ </span>
        ))}
      </p>
    </StyledContainer>
  );
};

export default Pokemon;
