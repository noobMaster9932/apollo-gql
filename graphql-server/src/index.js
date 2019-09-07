import { ApolloServer, AuthenticationError } from 'apollo-server-express'
import express from 'express'
import mongoose from 'mongoose'
import typeDefs from './type-defs'
import resolvers from './resolvers'
const runServer = async () => {
    const app = express()
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => {
            const username = req.headers.username
            const password = req.headers.password
            if (username !== 'randika' || password !== 'skuy') {
                throw new AuthenticationError(
                    'Please set auth headers correctly'
                )
            }
        }
    })

    server.applyMiddleware({ app })
    await mongoose.connect('mongodb://localhost:27017/mongo-gql', {
        useNewUrlParser: true
    })
    app.get('/', (_, res) => {
        res.send('<h1 style="text-align:center;">Ini server</h1>')
    })
    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server running at http://localhost:4000`)
    )
}
runServer()
