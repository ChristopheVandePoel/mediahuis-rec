import React from 'react';

import PokemonListItem from './PokemonListItem';

const PokemonList = ({ items, onClick }) => (
  <div>
    {items.length &&
      items.map(item => (
        <PokemonListItem
          item={item}
          key={item.id}
          onClick={onClick}
          />
      ))
    }
  </div>
);

export default PokemonList;