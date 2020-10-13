import gql from 'graphql-tag'
import { Likes_Fragment } from '../Fragments/likes.fragments'

export const LIKED_BY_USER_QUERY = gql`
    query UserQuery($user_id: Int!) {
        Likes(where: {user_id: {_eq: $user_id}}) {
            ...Likes
        }
    }
    ${Likes_Fragment}
`

export const LIKED_BY_MOVIE_QUERY = gql`
    query UserQuery($movie_id: Int!) {
        Likes(where: {movie_id: {_eq: $movie_id}}) {
            ...Likes
        }
    }
    ${Likes_Fragment}
`   