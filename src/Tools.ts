// Apollo
import { useQuery } from '@apollo/react-hooks';

// Database
import { Movie_By_ID } from './GraphQL/Queries/movie.queries';
import { Movies_Query } from './GraphQL/Queries/movie.queries';
import { Liked_By_Movie} from './GraphQL/Queries/like.queries';
import { Likes_By_User} from './GraphQL/Queries/like.queries';

// Main Function: Called by the app to get requested data
// Request Types:
//          0 - Movies      1 - Users
export function GetData(requestType: number, requestID: number){
    switch(requestType){
        case 0: {
            let requestedData: number[] | string;
            requestedData = GetMovieIDs(requestID);
            if (typeof requestedData === "string"){
                return requestedData;
            }
            //requestedData = MatchMovieIDs(requestedData);
            return requestedData;
        }
    }
    return "loading...";
}

///////////////////////////////////////////////////////
// ID Finders
///////////////////////////////////////////////////////
function GetMovieIDs(user: number){
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

function GetUserIDs(movie: number){
    var userIDs = new Array();
    const {data, loading, error} = useQuery(
        Liked_By_Movie, { variables: {user_id: movie}, }
    )
    if (loading) return "loading...";
    if (error) return "error!";
    for (var i = 0; i < data.Likes.length; i+=1){
        userIDs.push(data.Likes[i].user_id);
    }
    return userIDs;
}

///////////////////////////////////////////////////////
// Compares && Matches
///////////////////////////////////////////////////////
function MatchMovieIDs(movieIDs: number[]){
    // Query required Data
    const {data, loading, error} = useQuery(Movies_Query);
    if (loading) return "loading...";
    if (error) return "error!";
    // step through the id list and find the movie probably 
    // a better way to do this but it reduces query calls
    var movieList = new Array();
    for(let i = 0; i < movieIDs.length; i += 1){
        for (let j = 0; j < data.Movie.length; j += 1){
            if (movieIDs[i] == data.Movie[j].movie_id){
                movieList.push(data.Movie[j]);
            }
        }
    }
    // return array of movie objects
    return movieList;
}