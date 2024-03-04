import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'
import RenderBlog from './components/RenderBlog'

const App = () => {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")))

  return (
    <div>
      <h2>blogs</h2>
      {user == undefined ? <Login setUser={setUser} /> : <RenderBlog setUser={setUser} user={user}/>}
    </div>
  )
}

export default App