import React from 'react';
import styled from 'styled-components';

const SquadCardName = styled.div`
  
`;

const SquadCardMove = styled.div`
  padding: 5px;
  margin: 5px 0;
  background-color: #FFFFFF;
  color: #3A5D9F;
`;

const SquadCardContainer = styled.div`
  background-color: #A8A77A;
  padding: 10px;
  text-align: center;
  color: #FFFFFF;
`;

const SquadCard = ({ pokemon }) => (
  <SquadCardContainer>
    <img src={pokemon.image} />
    <SquadCardName>
      {pokemon.name}
    </SquadCardName>
    
    {pokemon.moves.map(move => (
      <SquadCardMove key={move.name}>{move.name}</SquadCardMove>
    ))}
  </SquadCardContainer>
);

export default SquadCard;