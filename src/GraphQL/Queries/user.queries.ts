import gql from 'graphql-tag'
import { User_Fragment } from '../Fragments/user.fragments'

export const User_By_ID = gql`
    query UserQuery($user_id: Int!) {
        User(where: {user_id: {_eq: $user_id}}) {
            ...User
        }
    }
    ${User_Fragment}
`

export const Users_Query = gql`
    query UserQuery {
        User(order_by: {user_id: asc}) {
            ...User
        }
    }
    ${User_Fragment}
`   