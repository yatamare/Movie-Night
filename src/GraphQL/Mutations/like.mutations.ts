import gql from 'graphql-tag'
import { Likes_Fragment } from '../Fragments/likes.fragments'

export const REMOVE_LIKED_MUTATION = gql`
    mutation MyMutation ($movie_id: Int!, $user_id: Int!) {
        delete_Likes(where: {movie_id: {_eq: $movie_id}, _and: {user_id: {_eq: $user_id}}}) {
        affected_rows
        }
    }
`

export const ADD_LIKED_MATUTION = gql `
    mutation MyMutation ($movie_id: Int!, $user_id: Int!) {
        insert_Likes(objects: {movie_id: 0, user_id: 0}) {
        affected_rows
        }
    }
`