import React from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import PokemonImage from '../components/PokemonImage';
import PokemonStats from '../components/PokemonStats';
import PokemonTutor from '../components/PokemonTutor';

const DetailsContainer = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
`;

const ListTitle = styled.div`
  color: #FDCC07;
  text-align: center;
`;

const GET_POKEMON = gql`
  query($name: String!) {
    Pokemon(name: $name) {
      name,
      id,
      image,
      stats {
        value,
        name
      },
      types {
        name
      },
      abilities {
        name
      },
      moves {
        name,
        type,
        learnMethod
      }
    }
  }
`;

const PokemonListContainer = ({ selectedPokemon, onSavePokemon, selectedMoves, onSelectMove, onRemoveMove }) => (
  <>
    {
      selectedPokemon.name ? 
        <Query query={GET_POKEMON} variables={{ name: selectedPokemon && selectedPokemon.name }}>
          {({loading, error, data}) => (
            <DetailsContainer>
              {
                loading ? 'loading' :
                <>
                  <PokemonImage pokemon={data.Pokemon} onSavePokemon={onSavePokemon} />
                  <PokemonStats pokemon={data.Pokemon} removeMove={onRemoveMove} selectedMoves={selectedMoves || data.Pokemon.abilities} />
                  <PokemonTutor moves={data.Pokemon.moves} selectedMoves={selectedMoves || data.Pokemon.abilities} onSelectMove={onSelectMove} />
                </>
              }
            </DetailsContainer>
          )}
        </Query> :
        <ListTitle>Please select a pokemon...</ListTitle>
    }
  </>
);

export default PokemonListContainer;