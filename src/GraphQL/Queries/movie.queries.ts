import gql from 'graphql-tag'
import { Movie_Data_Fragment } from '../Fragments/movie.fragments'

export const Movie_Data_By_ID = gql`
    query MovieDataQuery($ID: Int!) {
        movie_data(where: {ID: {_eq: $ID}}) {
            ...movie_data
        }
    }
    ${Movie_Data_Fragment}
`