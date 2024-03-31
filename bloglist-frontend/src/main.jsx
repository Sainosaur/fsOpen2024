import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './stores/notification'
import blogReducer from './stores/blog'
import { Provider } from 'react-redux'


const store = configureStore({
    reducer: {
        notification: notificationReducer,
        blog: blogReducer
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)