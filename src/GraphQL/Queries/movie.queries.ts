import gql from 'graphql-tag'
import { Movie_Fragment } from '../Fragments/movie.fragments'

// Basic Queries
/////////////////////
export const MOVIE_ID_QUERY = gql`
    query MovieQuery($movie_id: Int!) {
        Movie(where: {movie_id: {_eq: $movie_id}}) {
            ...Movie
        }
    }
    ${Movie_Fragment}
`   

export const MOVIE_ALL_QUERY = gql`
    query MovieQuery {
        Movie(order_by: {movie_id: asc}) {
            ...Movie
        }
    }
    ${Movie_Fragment}
`  

// Advanced Queries
//////////////////////
export const MOVIES_LIKED_BY_USER_QUERY = gql `
    query MovieQuery($user_id: Int!) {
        Movie(where: {Like_Data: {user_data: {user_id: {_eq: $user_id}}}}){
            ...Movie
        }
    }
    ${Movie_Fragment}
`


