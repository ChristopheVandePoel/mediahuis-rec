import React from 'react';
import styled from 'styled-components';


const MainContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StatColumn = styled.div`
  flex: 1;
`;

const StatRow = styled.div`
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const MoveItem = styled.span`
  width: 40%;
  border: 1px solid blue;
  display: inline-block;
  padding: 5px;
  margin: 2px;
`;

const PokemonStats = ({ pokemon, selectedMoves, removeMove }) => (
  <MainContainer>
    <Row>STATS</Row>
    <StatContainer>
      <StatColumn>
        {
          pokemon.stats.map((stat, id) => {
            return id % 2 ? <StatRow key={stat.name}>{`${stat.name} ${stat.value}`}</StatRow> : null;
          })
        }
      </StatColumn>
      <StatColumn>
        {
          pokemon.stats.map((stat, id) => {
            return id % 2 ? null : <StatRow key={stat.name}>{`${stat.name} ${stat.value}`}</StatRow>;
          })
        }
      </StatColumn>
    </StatContainer>
    <Row>SELECTED MOVES</Row>
    <div>
        {
          selectedMoves.map(move => (
            <MoveItem onClick={() => removeMove([
              ...selectedMoves.filter(oldMove => oldMove.name !== move.name)
            ])} key={move.name}>{move.name}</MoveItem>
          ))
        }
    </div>
  </MainContainer>
);

export default PokemonStats;