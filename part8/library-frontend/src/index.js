import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter } from 'react-router-dom'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import notificationReducer from './stores/Notification'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const store = configureStore({
    reducer: {
        notification: notificationReducer
    }
})

const authClient = setContext((_, { headers }) => {
    const token = localStorage.getItem('user_token')
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : null
        }
    }
})

const httpLink = createHttpLink({
    uri: "http://localhost:4000/"
})
// Creates wsLink object which allows the client to communicate with the websocket server. 

const wsLink = new GraphQLWsLink(
    createClient({url: 'ws://localhost:4000/'})
)

const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    authClient.concat(httpLink)
  )

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <ApolloProvider client={client} >
                    <App />
                </ApolloProvider>
        </Provider>
    </BrowserRouter>

)