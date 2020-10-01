import gql from 'graphql-tag'

export const Likes_Fragment = gql`
    fragment Likes on Likes {
        movie_id
        user_id
    }`