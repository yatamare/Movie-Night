// Base
import React from 'react';

// Apollo
import { useQuery } from '@apollo/react-hooks';

// Database
import { MOVIES_LIKED_BY_USER_QUERY } from './GraphQL/Queries/movie.queries';

// Materials

// CSS
import './index.css';

function App() {
    let requestID = 0;

    const {data, loading, error} = useQuery(
        MOVIES_LIKED_BY_USER_QUERY, { variables: {user_id: requestID}, }
    )
    if (loading) return <p>"loading..."</p>;
    if (error) return <p>"error!'</p>;
    
    return (
        <React.Fragment>
            <h1> Movie List </h1>
            <div className="container">
                <p> {data.Movie[0].movie_name} </p>
                <p> {data.Movie[1].movie_name} </p>
            </div>
        </React.Fragment>

    );
}

export default App;