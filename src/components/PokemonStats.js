import React from 'react';
import styled from 'styled-components';


const MainContainer = styled.div`
  display: flex;
  flex: 2.2;
  flex-direction: column;
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;

const StatColumn = styled.div`
  flex: 1;
`;

const StatRow = styled.div`
  color: #FDCC07;
  text-align: right;
  margin-right: 50px;
  flex: 1;
  text-transform: uppercase;
`;

const StatNumber = styled.span`
  color: #3A5D9F;
  font-size: 24px;
`;

const Row = styled.div`
  color: #3A5D9F;
  flex-direction: row;
  margin-top: 10px;
  text-align: center;
`;

const MoveItemTitle = styled.div`
`;

const MoveItem = styled.span`
  width: 40%;
  border: 1px solid #3A5D9F;
  display: inline-block;
  padding: 15px 10px;
  margin: 2px;
  cursor: pointer;
`;

const renderStat = (name, value) => (
  <StatRow key={name}>
    <span>{name}</span> <StatNumber>{value}</StatNumber>
  </StatRow>
)

const PokemonStats = ({ pokemon, selectedMoves, removeMove }) => (
  <MainContainer>
    <Row>STATS</Row>
    <StatContainer>
      <StatColumn>
        {
          pokemon.stats.map((stat, id) => {
            return id % 2 ? renderStat(stat.name, stat.value) : null;
          })
        }
      </StatColumn>
      <StatColumn>
        {
          pokemon.stats.map((stat, id) => {
            return id % 2 ? null : renderStat(stat.name, stat.value);
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
            ])} key={move.name}>
              <MoveItemTitle>{move.name}</MoveItemTitle>
            </MoveItem>
          ))
        }
    </div>
  </MainContainer>
);

export default PokemonStats;