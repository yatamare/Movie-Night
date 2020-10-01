import gql from 'graphql-tag'

export const Movie_Fragment = gql`
    fragment Movie on Movie {
        movie_name
        movie_id
        movie_description
    }`