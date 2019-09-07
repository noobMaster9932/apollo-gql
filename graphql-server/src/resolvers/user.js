import { User } from '../models'
import { /*filterGenerator,*/ sortGenerator } from '../utils/filter-generator'
export default {
  Query: {
    Users: (_, { skip, take, orderBy = null, where = {} }) => {
      // const filterInput = Object.getOwnPropertyNames(where)
      return User.find({ ...where })
        .limit(take)
        .skip(skip)
        .sort(orderBy === null ? {} : sortGenerator(orderBy))
    },
    User: (_, { where }) => User.findOne({ _id: where.id })
  },
  Mutation: {
    createUser: async (_, { data }) => {
      const { username, password, birth_day } = data
      const input = new User({
        username,
        password,
        birth_day,
        is_active: true,
        created_date: new Date(),
        created_by: 'SYSTEM',
        modified_date: new Date(),
        modified_by: 'SYSTEM'
      })
      await input.save()
      return input
    },
    updateUser: async (_, { data, where }) => {
      await User.updateOne(
        { _id: where.id },
        { $set: { ...data, modified_date: new Date() } }
      )
      return User.findOne({ _id: where.id })
    }
  }
}
