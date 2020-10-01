import gql from 'graphql-tag'
import { Likes_Fragment } from '../Fragments/likes.fragments'

export const Like_By_User = gql`
    query UserQuery($user_id: Int!) {
        User(where: {user_id: {_eq: $user_id}}) {
            ...User
        }
    }
    ${Likes_Fragment}
`

export const Like_By_Movie = gql`
    query UserQuery($movie_id: Int!) {
        User(where: {movie_id: {_eq: $movie_id}}) {
            ...User
        }
    }
    ${Likes_Fragment}
`   