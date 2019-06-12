import React from 'react';

import styled from 'styled-components';

const Item = styled.div`
  background-color: #3A5D9F;
  border: 1px solid #3A5D9F;
  border-radius: 4px;
  color: #FDCC07;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px 10px;
  text-transform: uppercase;

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