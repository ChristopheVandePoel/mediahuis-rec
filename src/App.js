import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./graphql";

import MainView from './views/MainView';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MainView />
      </ApolloProvider>
    );
  }
}

export default App;
