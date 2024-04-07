import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { Routes, Route, useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <button onClick={() => navigate('/')}>authors</button>
        <button onClick={() => navigate('/books')}>books</button>
        <button onClick={() => navigate('/newbook')}>add book</button>
      </div>
      <Routes>
        <Route path='/' element={<Authors />} />
        <Route path='/books' element={<Books />} />
        <Route path='/newbook' element={<NewBook/>} />
      </Routes>
    </div>
  )
}

export default App
