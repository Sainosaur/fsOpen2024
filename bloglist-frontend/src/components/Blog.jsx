import { useState } from "react"
import BlogService from "../services/blogs"
const Blog = ({ blog, user }) => {
  const blogStyle = {
    color: 'blue',
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const [disp, setDisp] = useState([{display: 'none'}, "View"])
  // State used to handle likes so that the component reloads when the like button is pressed
  const [likes, setLikes] = useState(blog.likes)
  const toggleVisibility = () => {
    if (disp[1] == "View") {
      setDisp([{}, "Hide"])
    } else if (disp[1] == "Hide") {
      setDisp([{display: 'none'},"View"])
    }
  }
  const likeBlog = () => {
    BlogService.likeBlog(blog, user)
    setLikes(likes + 1)
  }

  return (
  <div style={blogStyle}>
    <p>{blog.title} {blog.author} <button onClick={() => toggleVisibility()}>{disp[1]}</button></p>
    <div style={disp[0]}>
      <p>{blog.url}</p>
      <p>likes: {likes}<button onClick={() => likeBlog()}>like</button></p>
      <p>user: {blog.user ? blog.user.name : 'not found'}</p>
    </div>
  </div>  
)}

export default Blog