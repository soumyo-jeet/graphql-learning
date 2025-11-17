import { gql } from "@apollo/client";

export const USER = gql`
    query GetUser ($id:ID!) {
        user (id:$id) {
            name
        }
    }
`

export const USERS = gql`
    query GetUsers {
        users {
            occ
        }
    }
`