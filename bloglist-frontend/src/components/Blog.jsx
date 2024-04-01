import { useState } from 'react'
import BlogService from '../services/blog'
import { useDispatch } from 'react-redux'
import { removeBlog } from '../stores/blog'
import { Link } from 'react-router-dom'

const Blog = ({ blog }) => {
    const blogStyle = {
        color: 'blue',
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }
    return (
        <div style={blogStyle}>
            <Link to={`/blogs/${blog.id}`}>{blog.title} {blog.author}</Link>
        </div>
    )
}

export default Blog