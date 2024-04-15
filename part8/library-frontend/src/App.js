import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LoginForm from './components/Login'
import Recommended from './components/Recommended'
import { SUB_BOOK_ADDED } from './queries'
import { useSubscription } from '@apollo/client'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { resetNotification, setNotification } from './stores/Notification'
import updateCache from './helper/updateCache'

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useSubscription(SUB_BOOK_ADDED, {
    onData: ({ data, client }) => {
      if(!data.loading) {
        const notification = `${data.data.bookAdded.title} by ${data.data.bookAdded.author.name} added!`
        dispatch(setNotification(notification))
        setTimeout( () => dispatch(resetNotification()), '5000')
        updateCache(data, client)
      }
    }
  })

  const [token, setToken] = useState(localStorage.user_token)

  return (
    <div>
      <div>
        <button onClick={() => navigate('/')}>authors</button>
        <button onClick={() => navigate('/books')}>books</button>
        { token ? <>
        <button onClick={() => navigate('/newbook')}>add book</button>
        <button onClick={() => navigate('/recommended')} >Recommended</button>
        <button onClick={() => {
          setToken(null)
          localStorage.removeItem('user_token')
        }}>Log Out</button>
        </> : <button onClick={() => navigate('/login')}>Login</button>}
      </div>
      <Notification />
      <Routes>
        <Route path='/' element={<Authors />} />
        <Route path='/books' element={<Books />} />
        <Route path='/newbook' element={<NewBook/>} />
        <Route path='/login' element={<LoginForm setToken={setToken} />} />
        <Route path='/recommended' element={<Recommended />} />
      </Routes>
    </div>
  )
}

export default App
