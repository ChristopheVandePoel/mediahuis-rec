import React from 'react';
import styled from 'styled-components';

import PokemonListContainer from '../containers/PokemonListContainer';
import PokemonDetailsContainer from '../containers/PokemonDetailsContainer';
import SquadCard from '../components/SquadCard';

// import propTypes from 'prop-types';

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 200px;
`;

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const LogoRow = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 60px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  > .row__title {
    text-align: center;
    flex: 1;
  }
`;

const SelectColumn = styled.div`
  flex: 1;
`;

const DetailColumn = styled.div`
  flex: 4;
`;

const CardColumn = styled.div`
  flex: 1;
  max-width: 16%;
  margin: 5px;
`;

class MainView extends React.Component {

  state = {
    selectedPokemon: {},
    selectedPokemonMove: null,
    savedPokemon: [],
  }

  handlePokemonSelection = (pokemon) => {
    if(pokemon.id !== this.state.selectedPokemon.id) {
      this.handlePokemonResetStats();
      this.setState({
        selectedPokemon: pokemon,
      })
    }
  }

  handlePokemonMoveAdd = (moves) => {
    if (!this.state.selectedPokemonMove || this.state.selectedPokemonMove.length < 4) {
      this.setState({
        selectedPokemonMove: [
          ...moves,
        ]
      })
    }
  }

  handlePokemonMoveRemove = (moves) => {
    this.setState({
      selectedPokemonMove: moves,
    })
  }

  handlePokemonResetStats = () => {
    this.setState({
      selectedPokemonMove: null,
    })
  }

  handlePokemonSave = (pokemonDetails) => {
    if(this.state.savedPokemon.length > 5) {
      return;
    }
    let selectedMoves = this.state.selectedPokemonMove;
    if(selectedMoves === null) {
      selectedMoves = pokemonDetails.abilities;
    }
    this.setState({
      savedPokemon: [
        ...this.state.savedPokemon,
        {
          ...pokemonDetails,
          moves: selectedMoves,
        }
      ]
    }, () => console.log(this.state));
  }

  render() {
    return (
      <Container>
        <LogoRow>
          <Logo src="https://vignette.wikia.nocookie.net/logopedia/images/2/2b/Pokemon_2D_logo.svg/revision/latest/scale-to-width-down/639?cb=20170115063554" />
        </LogoRow>
        <Row>
          <SelectColumn>
            <PokemonListContainer
              onClickItem={this.handlePokemonSelection} />
          </SelectColumn>
          <DetailColumn>
            <PokemonDetailsContainer
              selectedPokemon={this.state.selectedPokemon}
              onSavePokemon={this.handlePokemonSave}
              selectedMoves={this.state.selectedPokemonMove}
              onSelectMove={this.handlePokemonMoveAdd}
              onRemoveMove={this.handlePokemonMoveRemove}
              />
          </DetailColumn>
        </Row>
        <Row>
          <div className="row__title">SELECTED SQUAD</div>
        </Row>
        <Row>
          {
            this.state.savedPokemon.map(pokemon => (
              <CardColumn key={`${pokemon.id}-${Math.random()}`}>
                <SquadCard pokemon={pokemon} />
              </CardColumn>
            ))
          }
        </Row>
      </Container>
    );
  }
};

export default MainView;