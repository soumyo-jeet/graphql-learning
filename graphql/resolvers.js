import Report from "../models/Report.js"
import User from "../models/User.js"

export const resolvers = {
    // resolver for mutations -> data store 
    Mutation: {
        newUser: async (_, args) => {
            const user = await User.create(args)
            console.log(user)
            return "User is created!"
        }
    },


    // resolver for queries to the db -> data fetch
    Query: {
        hello: () => "Hello World",

        // all users
        users: async () => {
            const users = await User.find()
            console.log(users)
            return users
        },

        // user by id
        user: async (parent, arg) => {
            const user = await User.findById(arg.id)
            console.log(arg.id)
            return user
        },

        reports: async () => {
            const reports = await Report.find()
            return reports
        }
    },

    // resolver to retrieve owner details whenever owner from reports is triggered
    Report: {
        owner: async (Report) => {
            const owner = await User.findById(Report.owner)
            console.log(owner)
            return owner
        },
        anal: async (Report) => {
            const anal = await Report.anal
            return anal
        }

    },

    // resolver to retrieve reports related to an user -> relation 
    User: {
        reports: async (User) => {
            const reports = await Report.find({ owner: User._id })
            return reports
        }
    }
}   