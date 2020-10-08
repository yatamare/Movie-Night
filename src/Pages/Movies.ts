// Base
import React from 'react';

// Apollo
import { useQuery } from '@apollo/react-hooks';

// Database
import { Movie_By_ID } from '../GraphQL/Queries/movie.queries';
import { Movies_Query } from '../GraphQL/Queries/movie.queries';
import { Liked_By_Movie} from '../GraphQL/Queries/like.queries';
import { Likes_By_User} from '../GraphQL/Queries/like.queries';

// Materials

// CSS

function Movies(){
    const {data, loading, error} = useQuery(Movies_Query);
    if (loading) return "loading...";
    if (error) return "error!";


}