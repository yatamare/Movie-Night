import gql from 'graphql-tag'

export const Movie_Data_Fragment = gql`
    fragment movie_data on movie_data {
        Name
        ID
        Description
    }`