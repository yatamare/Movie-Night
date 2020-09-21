// Base
import React from 'react';

// Materials

// Apollo
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

// Database


// CSS
import './index.css';


function App() {
 
    const httpLink = new HttpLink({
        uri: "https://sweet-salmon-23.hasura.app/v1/graphql"
    })

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
      });
    
    return (
        <ApolloProvider client={client}>
            
        </ApolloProvider>
    );
}

export default App;