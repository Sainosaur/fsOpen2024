import { useState } from "react"
const Blog = ({ blog }) => {
  const blogStyle = {
    color: 'blue',
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const [disp, setDisp] = useState([{display: 'none'}, "View"])
  const toggleVisibility = () => {
    if (disp[1] == "View") {
      setDisp([{}, "Hide"])
    } else if (disp[1] == "Hide") {
      setDisp([{display: 'none'},"View"])
    }
  }
  return (
  <div style={blogStyle}>
    <p>{blog.title} {blog.author} <button onClick={() => toggleVisibility()}>{disp[1]}</button></p>
    <div style={disp[0]}>
      <p>{blog.url}</p>
      <p>likes: {blog.likes}<button>like</button></p>
    </div>
  </div>  
)}

export default Blog