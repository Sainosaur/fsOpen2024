import {useState, useEffect} from 'react'

const RenderBlog = ({setUser, user}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
      blogService.getAll().then(blogs =>
        setBlogs(blogs)
      )  
    }, [])
    return (
      <div>
        <p>{`${String(user.name)} logged in`}<button onClick={() => {
          setUser("")
          // reloads the window to repeat the user checking process and return to a login screen
          window.location.reload()
          window.localStorage.clear()
          }}>LogOut</button></p>
        {blogs.map(blog => <Blog key={blog.id} blog={blog}/>)}
      </div>
    )
  }

export default RenderBlog