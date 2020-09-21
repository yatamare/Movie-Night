import gql from 'graphql-tag'
import { Movie_Data_Fragment } from '../Fragments/movie.fragments'

export const Movie_Data_By_ID = gql`
    query MovieDataQuery($ID: Int!) {
        MovieData(where: {ID: {_eq: $ID}}) {
            ...MovieData
        }
    }
    ${Movie_Data_Fragment}
`   