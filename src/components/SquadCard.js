import React from 'react';

const SquadCard = ({ pokemon }) => (
  <div>
    <img src={pokemon.image} />
    {pokemon.name}
    {pokemon.moves.map(move => (
      <div>{move.name}</div>
    ))}
  </div>
);

export default SquadCard;