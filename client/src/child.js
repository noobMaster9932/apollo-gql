import React, { Component } from 'react'
import gql from 'graphql-tag'
const getAllUser = gql`
  query {
    Users {
      id
      username
    }
  }
`
export class child extends Component {
  UNSAFE_componentWillMount() {
    this.props.apolloClient
      .query({
        query: getAllUser,
        fetchPolicy: 'no-cache'
      })
      .then(res => {
        console.log(res.data.Users)
      })
      .catch(err => console.log(err))
  }
  render() {
    return <div />
  }
}

export default child
