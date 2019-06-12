import React from 'react';

import styled from 'styled-components';


const StatImage = styled.div`
  flex: 1;
  text-align: center;
`;

const SaveButton = styled.button`
  padding: 10px;
  background-color: #3A5D9F;
  color: #FFFFFF;
`;

const PokemonImage = ({ pokemon, onSavePokemon }) => (
  <StatImage>
    <img src={pokemon.image} />
    <div>{pokemon.name}</div>
    <SaveButton onClick={() => onSavePokemon(pokemon)}>Save pokemon</SaveButton>
  </StatImage>
)

export default PokemonImage;