// Base
import React from 'react';
import { GetMoviesByUser } from './Tools';

// Queries
import { Likes_By_User} from './GraphQL/Queries/like.queries';
import { User_By_ID } from './GraphQL/Queries/user.queries';
import { Movie_By_ID } from './GraphQL/Queries/movie.queries';

// Apollo
import { useQuery } from '@apollo/react-hooks';

// Materials

// CSS
import './index.css';

function App() {

    let userID = 0;
    const rawr = GetMoviesByUser(userID);
    const {data, loading, error } = useQuery(
        Likes_By_User, { variables: {user_id: userID}, }
    )

    if (loading) return <p>Loading...</p>;
    if (error) return <p>error</p>

    return (
        <React.Fragment>
            <h1> Movie List </h1>
            <div className="container">
                <p> {data.Likes[0].movie_id} </p>
                <p> {data.Likes[1].movie_id} </p>
                <p> {rawr[0]} </p>
                <p> {rawr[1]} </p>
            </div>
        </React.Fragment>

    );
}

export default App;