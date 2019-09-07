import { gql } from 'apollo-server-express'
import User from './user'
const typeDefs = `
    scalar DateTime
    ${User.Model}
    type Query {
        ${User.Query}
    }
    type Mutation {
        ${User.Mutation}
    }
`
export default gql`
    ${typeDefs}
`
