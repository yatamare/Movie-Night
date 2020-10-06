// Apollo
import { useQuery } from '@apollo/react-hooks';

// Database
import { Movie_By_ID } from './GraphQL/Queries/movie.queries';
import { Movies_By_ID } from './GraphQL/Queries/movie.queries';
import { Liked_By_Movie} from './GraphQL/Queries/like.queries';
import { Likes_By_User} from './GraphQL/Queries/like.queries';

// Given an array of movie ids it returns an array of matching movie
function FindMovieMatches(movieIDList: number[]){
    const {data, loading, error} = useQuery(
        Movies_By_ID, { variables: {movie_id: [movieIDList]}, }
    )
    if (loading) return "loading...";
    if (error) return "error!";
    return data;
}

// Grabs a complete list of likes done by a user id. Then grabs the movie
// ids from the liked data and creates an array of movie ids
export function GetMoviesByUser(user: number){
    var movieIDs = new Array();
    const {data, loading, error} = useQuery(
        Likes_By_User, { variables: {user_id: user}, }
    )
    if (loading) return "loading...";
    if (error) return "error!";
    for (var i = 0; i < data.Likes.length; i+=1){
        movieIDs.push(data.Likes[i].movie_id);
    }
    return movieIDs;
}



function GetUsersByMovie(movie: number){
    return false
}