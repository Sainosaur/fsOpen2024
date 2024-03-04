import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'

const RenderBlog = (user) => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )  
  }, [])
  console.log(user)
  console.log(user.user.name)
  return (
    <div>
      <p>{`${String(user.user.name)} logged in`}</p>
      {blogs.map(blog => <Blog key={blog.id} blog={blog}/>)}
    </div>
  )
}

const App = () => {
  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)
  

  return (
    <div>
      <h2>blogs</h2>
      {user == null ? <Login user={user} password={password} setUser={setUser} setPassword={setPassword} /> : <RenderBlog user={user}/>}
    </div>
  )
}

export default App