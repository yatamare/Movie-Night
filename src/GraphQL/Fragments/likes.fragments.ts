import gql from 'graphql-tag'

export const Likes_Fragment = gql`
    fragment Likes on Likes {
        like_id
        movie_id
        user_id
    }`