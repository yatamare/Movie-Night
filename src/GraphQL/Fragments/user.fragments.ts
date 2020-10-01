import gql from 'graphql-tag'

export const User_Fragment = gql`
    fragment User on User {
        user_name
        user_id
    }`