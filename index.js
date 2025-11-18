import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { schema } from "./graphql/schema.js"
import connectToDB from "./db/index.js"
import { resolvers } from "./graphql/resolvers.js"
import express from "express"
// import { expressMiddleware } from "@apollo/server/express4";

const PORT = 5000
connectToDB()
const app = express()


// Apollo server create
const server = new ApolloServer({
    // resonse schemas
    typeDefs: schema,
    // response resolvers
    resolvers: resolvers
})

// Bind the server to a port with graphql
startStandaloneServer(server, {
    listen:{
        port: PORT,
    },
    context: async ({req}) => {
        const token = await req?.headers?.token
        return {token: token}
    }
})
.then(() => console.log(`Server is running on http://localhost:${PORT}`))
.catch((e) => "Server is not listening...")


// Bind the server to a port with express (NOT AVAILABLE IN NEW VERSION OF APOLLO SERVER)
app.get("/", (req, res) => res.send("Hello World"))
// app.use("/graphql", expressMiddleware(server))
app.listen(5001, ()=> console.log(`"Express is running on http://localhost:5001"`))