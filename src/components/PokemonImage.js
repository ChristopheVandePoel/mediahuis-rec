import React from 'react';

import styled from 'styled-components';

const StatImage = styled.div`
  flex: 1;
`;

const PokemonImage = ({ pokemon, onSavePokemon }) => (
  <StatImage>
    <img src={pokemon.image} />
    <div>{pokemon.name}</div>
    <button onClick={() => onSavePokemon(pokemon)}>Save pokemon</button>
  </StatImage>
)

export default PokemonImage;