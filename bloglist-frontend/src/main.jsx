import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/notification'
import { Provider } from 'react-redux'

const store = configureStore({
    reducer: {
        notification: reducer
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)