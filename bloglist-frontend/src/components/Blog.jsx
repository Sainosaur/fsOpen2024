import { useState } from 'react'
import BlogService from '../services/blogs'

const Blog = ({ blog, user, setBlogList, blogList }) => {
  const blogStyle = {
    color: 'blue',
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const [disp, setDisp] = useState([{ display: 'none' }, 'View'])
  // State used to handle likes so that the component reloads when the like button is pressed
  const [likes, setLikes] = useState(blog.likes)
  const toggleVisibility = () => {
    if (disp[1] === 'View') {
      setDisp([{}, 'Hide'])
    } else if (disp[1] === 'Hide') {
      setDisp([{ display: 'none' },'View'])
    }
  }
  const likeBlog = () => {
    BlogService.likeBlog(blog, user)
    setLikes(likes + 1)
  }
  const deleteBlog = () => {
    try {
      window.confirm('Are you sure you would like to delete this blog?') ? BlogService.deleteBlog(blog) : null
      setBlogList(blogList.filter((blog1) => blog1 !== blog,))

    } catch {
      window.alert('Error! Cannot delete blog, please try again later')
    }
  }

  return (
    <div style={blogStyle}>
      <p>{blog.title} {blog.author} <button onClick={() => toggleVisibility()}>{disp[1]}</button></p>
      <div style={disp[0]}>
        <p>{blog.url}</p>
        <p>likes: {likes}<button onClick={() => likeBlog()}>like</button></p>
        <p>user: {blog.user ? blog.user.name : 'not found'}</p>
        {blog.user.id === user.id ? <button onClick={() => deleteBlog()}>remove</button> : null}
      </div>
    </div>
  )
}

export default Blog