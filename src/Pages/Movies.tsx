// Base
import React from 'react';

// Apollo
import { useQuery } from '@apollo/react-hooks';

// Database
import { MOVIES_LIKED_BY_USER_QUERY } from '../GraphQL/Queries/movie.queries';
import { MOVIE_ALL_QUERY } from '../GraphQL/Queries/movie.queries';

// CSS & Material UI
import '@material-ui/core';

function Movies(){

    let userId = 0;
    // Grab the required data
    var {data, loading, error} = useQuery(
        MOVIES_LIKED_BY_USER_QUERY, { variables: {user_id: userId}, }
    )
    let likedMovies = data.Movie;
    var {data, loading, error} = useQuery( MOVIE_ALL_QUERY )
    let allMovies = data.Movie;

    //
    return(
        <div>
            <p> {likedMovies[0].movie_name} </p>
            <p> {likedMovies[1].movie_name} </p>
        </div>
    );
}

export default Movies;