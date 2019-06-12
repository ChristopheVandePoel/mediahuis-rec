import React from 'react';
import styled from 'styled-components';

const MovesItem = styled.div`
  padding: 5px;
  color: #3A5D9F;
  cursor: pointer;

  :hover {
    background-color: #f3f3f3;
  }
`;

const MovesContainer = styled.div`
  max-height: 100%;
  overflow-x: scroll;
`;

const ListTitle = styled.div`
  color: #FDCC07;
  text-align: center;
`;

const handleSelectMove = (move, selectedMoves, onSelectMove) => {
  if(!selectedMoves.find(oldMove => move.name === oldMove.name)) {
    onSelectMove([
      ...selectedMoves,
      move,
    ]); 
  }
}

const PokemonTutor = ({ moves, selectedMoves, onSelectMove }) => (
  <MovesContainer>
    <ListTitle>TUTOR MACHINE</ListTitle>
    {
      moves.map(move => (
        <MovesItem key={move.name} onClick={() => handleSelectMove(move, selectedMoves, onSelectMove)}>{move.name}</MovesItem>
      ))
    }
  </MovesContainer>
);

export default PokemonTutor;