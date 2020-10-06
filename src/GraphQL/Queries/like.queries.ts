import gql from 'graphql-tag'
import { Likes_Fragment } from '../Fragments/likes.fragments'

export const Likes_By_User = gql`
    query UserQuery($user_id: Int!) {
        Likes(where: {user_id: {_eq: $user_id}}) {
            ...Likes
        }
    }
    ${Likes_Fragment}
`

export const Liked_By_Movie = gql`
    query UserQuery($movie_id: Int!) {
        Likes(where: {movie_id: {_eq: $movie_id}}) {
            ...Likes
        }
    }
    ${Likes_Fragment}
`   