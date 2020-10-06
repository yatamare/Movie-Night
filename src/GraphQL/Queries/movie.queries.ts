import gql from 'graphql-tag'
import { Movie_Fragment } from '../Fragments/movie.fragments'

export const Movie_By_ID = gql`
    query MovieQuery($movie_id: Int!) {
        Movie (where: {movie_id: {_eq: $movie_id}}) {
            ...Movie
        }
    }
    ${Movie_Fragment}
`   

export const Movies_By_ID = gql`
    query MovieQuery($movie_id: [Int!]!) {
        Movie (where: {movie_id: {_eq: $movie_id}}) {
            ...Movie
        }
    }
    ${Movie_Fragment}
`  