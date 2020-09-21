import gql from 'graphql-tag'

export const Movie_Data_Fragment = gql`
    fragment MovieData on MovieData {
        Name
        ID
        Description
    }`