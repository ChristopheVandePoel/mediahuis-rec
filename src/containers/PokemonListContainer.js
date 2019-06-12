import React from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import PokemonList from '../components/PokemonList'

const ListContainer = styled.div`
  max-height: 400px;
  overflow-y: scroll;
`;

const ListTitle = styled.div`
  color: #FDCC07;
  text-align: center;
`;

const GET_ALL_POKEMON = gql`
  query {
    Pokemons(first: 151) {
      id,
      name
    }
  }
`;

const PokemonListContainer = ({ onClickItem }) => (
  <Query query={GET_ALL_POKEMON}>
    {({loading, error, data}) => (
      <div>
        <ListTitle>SELECT A POKEMON</ListTitle>
        <ListContainer>
          {loading ?
            'loading' :
            <PokemonList items={data.Pokemons} onClick={onClickItem} />
          }
        </ListContainer>
      </div>
    )}
  </Query>
);

export default PokemonListContainer;