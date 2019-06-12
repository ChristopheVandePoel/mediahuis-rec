import React from 'react';

import styled from 'styled-components';

const Item = styled.div`
  background-color: lightblue;
  border: 1px solid blue;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;

  :hover {
    background-color: white;
  }
`;

const PokemonListItem = ({ item, active, onClick }) => (
  <Item onClick={() => onClick(item)}>
    {item.name}
  </Item>
);

PokemonListItem.defaultProps = {
  onClick: () => console.log('no onclick provided for this item'),
}

export default PokemonListItem;