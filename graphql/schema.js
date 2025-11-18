export const schema = `#graphql

    type User {
        name: String!,
        email: String!,
        password: String,
        occ: String!,
        age: Int,
        gender: String
        reports: [Report]
    }


    type Analysis {
        deseases: [String],
        precautions: [String]
    }
    
    type Report {
        owner: User
        cd: Float!,
        hei: Float!,
        hmpi: Float!,
        sd: Float!,
        pd: Float!,
        isCritical: Int!,
        anal: Analysis 
    }

    type Query {
        hello: String,
        users: [User],
        user(id:ID!): User,
        reports: [Report]
    }

    type Mutation {
        newUser(name:String!, age:Int!, gender:String!, occ:String!, email: String!): String,
        updateUser(id:ID!, name:String!): String
    }
`