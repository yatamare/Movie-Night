// Base
import React from 'react';

// Materials

// Apollo
import { useQuery } from '@apollo/react-hooks';

// Database
import { Movie_By_ID } from './GraphQL/Queries/movie.queries';

// CSS
import './index.css';


function App() {
    
    const {data, loading, error } = useQuery(
        Movie_By_ID, { variables: {movie_id: 0}, }
    )
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>error</p>

    return (
        <React.Fragment>
            <h1> Movie List </h1>
            <div className="container">
                <p> {data.Movie[0].movie_name} </p>
                <p> Hello there</p>


            </div>
        </React.Fragment>

    );
}

export default App;