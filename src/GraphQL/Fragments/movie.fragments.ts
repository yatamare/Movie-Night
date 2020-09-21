import gql from 'graphql-tag'

export const MovieData = gql`
    fragment MovieData on MovieData {
        Name
        ID
        Description
    }
