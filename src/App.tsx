// Base
import React from 'react';

// Materials

// Apollo
import { useQuery } from '@apollo/react-hooks';

// Database
import { Movie_Data_By_ID } from './GraphQL/Queries/movie.queries';

// CSS
import './index.css';


function App() {
    
    let age: number = 0;
    const {data, loading, error } = useQuery(
        Movie_Data_By_ID, { variables: {ID: age}, }
    )
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>error</p>

    return (
        <React.Fragment>
            <h1> Movie List </h1>
            <p> {data.MovieData[0].Name} </p>
        </React.Fragment>

    );
}

export default App;