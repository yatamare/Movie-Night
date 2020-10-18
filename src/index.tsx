import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Apollo
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

// Linking Database
const httpLink = new HttpLink({
    uri: "https://sweet-salmon-23.hasura.app/v1/graphql"
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

// Render
ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </ApolloProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();