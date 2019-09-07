import React from 'react'
import './App.css'
import { ApolloConsumer } from 'react-apollo'
import Child from './child'
function App() {
  return (
    <ApolloConsumer>
      {client => (
        <div>
          <h2 style={{ textAlign: 'center' }}>parent</h2>
          <Child apolloClient={client} />
        </div>
      )}
    </ApolloConsumer>
  )
}

export default App
