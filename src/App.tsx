// Base
import React from 'react';
// Materials

// Apollo
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Database

// CSS
import './index.css';


function App() {
 
    const httpLink = new HttpLink({
        url: 'http://localhost:8080'
    })

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
      });
    
}