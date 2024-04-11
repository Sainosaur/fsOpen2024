import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter } from 'react-router-dom'

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

const client = new ApolloClient({
    link: authClient.concat(httpLink),
    cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ApolloProvider client={client} >
            <App />
        </ApolloProvider>
    </BrowserRouter>

)