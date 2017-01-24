import React from 'react';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, browserHistory } from 'react-router';

import MainPage from './views/MainPage';

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciybvbmtn01a60132wh9053i0' });

const client = new ApolloClient({ networkInterface });

function App(){
  return(
    <ApolloProvider client={client}>
      <Router history={browserHistory}>
        <Route path='/' component={MainPage} />
      </Router>
    </ApolloProvider>
  );
}

export default App;