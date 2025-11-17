import { gql } from "@apollo/client";

export const NEWUSER = gql`
    mutation addUser ($name: String!, $age: Int!, $gender: String!, $occ: String!, $email: String!)
    {
        newUser(name: $name, age: $age, gender: $gender, occ: $occ, email: $email)
    }
` 