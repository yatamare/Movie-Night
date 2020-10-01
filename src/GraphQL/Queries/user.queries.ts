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

export const User_By_Name = gql`
    query UserQuery($user_name: String!) {
        User(where: {user_name: {_eq: $user_name}}) {
            ...User
        }
    }
    ${User_Fragment}
`   