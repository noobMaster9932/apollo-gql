export default {
  Model: `
        type User {
            id: ID!
            username: String
            password: String
            birth_day: DateTime
            is_active: Boolean
            created_date: DateTime
            created_by: String
            modified_date: DateTime
            modified_by: String
        }
        input userCreateInput {
            username: String!
            password: String!
            birth_day: DateTime
        }
        input userUpdateInput {
            username: String
            password: String
            birth_day: DateTime
            is_active:Boolean
        }
        input whereUserInput {
            username:String
            birth_day:DateTime
            is_active:Boolean
            created_date: DateTime
            created_by: String
            modified_date: DateTime
            modified_by: String
        }
        input whereUserUpdateInput {
            id:ID!
        }
        enum sortUserInput {
            username_ASC
            username_DESC
            birth_day_ASC
            birth_day_DESC
            is_active_ASC
            is_active_DESC
            created_date_ASC
            created_date_DESC
            created_by_ASC
            created_by_DESC
            modified_date_ASC
            modified_date_DESC
            modified_by_ASC
            modified_by_DESC
        }
    `,
  Query: `
        Users(skip: Int, take: Int, orderBy: sortUserInput, where:whereUserInput): [User!]!
        User(where:whereUserUpdateInput!):User!
        `,
  Mutation: `
         createUser(data:userCreateInput): User!
         updateUser(data:userUpdateInput, where: whereUserUpdateInput!): User!
    `
}
