import ReactDOM from 'react-dom/client'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const combinedReducer = combineReducers({
  anecdotes: anecReducer,
  filter: filterReducer
})

const store = createStore(combinedReducer)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)