import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LoginForm from './components/Login'
import Recommended from './components/Recommended'

const App = () => {
  const navigate = useNavigate()
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
          localStorage.user_token = null
        }}>Log Out</button>
        </> : <button onClick={() => navigate('/login')}>Login</button>}
      </div>
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
