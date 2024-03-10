import {useState, useEffect, useRef} from 'react'
import Blog from '../components/Blog'
import blogService from '../services/blogs'
import NewBlog from './NewBlog'
import VisibilityComponent from './Visibility'

const RenderBlog = ({setUser, user}) => {
    const [blogs, setBlogs] = useState([])
    const GlobalToggle = useRef()
    useEffect(() => {
      blogService.getAll().then(blogs =>
        setBlogs(blogs)
      )  
    }, [])
    return (
    <>
      <div>
        <p>{`${String(user.name)} logged in`}<button onClick={() => {
          setUser("")
          // reloads the window to repeat the user checking process and return to a login screen
          window.location.reload()
          window.localStorage.clear()
          }}>Log Out</button></p>
        <VisibilityComponent invisiblemessage="new blog" visiblemessage="cancel" ref={GlobalToggle}>
          <NewBlog user={user} selfToggle={GlobalToggle} />
        </VisibilityComponent>
        {blogs.map(blog => <Blog key={blog.id} blog={blog}/>)}
      </div>
      </>
    )
  }

export default RenderBlog