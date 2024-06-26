import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './stores/notification'
import blogReducer from './stores/blog'
import userReducer from './stores/user'
import usersReducer from './stores/users'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'


const store = configureStore({
    reducer: {
        notification: notificationReducer,
        blog: blogReducer,
        user: userReducer,
        users: usersReducer
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <NextUIProvider>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </NextUIProvider>

)