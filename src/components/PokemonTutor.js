import React from 'react';
import styled from 'styled-components';

const MovesContainer = styled.div`
  max-height: 100%;
  overflow-x: scroll;
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
    {
      moves.map(move => (
        <div key={move.name} onClick={() => handleSelectMove(move, selectedMoves, onSelectMove)}>{move.name}</div>
      ))
    }
  </MovesContainer>
);

export default PokemonTutor;