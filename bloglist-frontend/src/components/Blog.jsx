import { useState } from 'react'
import BlogService from '../services/blog'
import { useDispatch } from 'react-redux'
import { removeBlog } from '../stores/blog'

const Blog = ({ blog, user, blogList, like }) => {
    const blogStyle = {
        color: 'blue',
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }
    const [disp, setDisp] = useState([{ display: 'none' }, 'View'])
    const dispatch = useDispatch()
    // State used to handle likes so that the component reloads when the like button is presseds
    const toggleVisibility = () => {
        if (disp[1] === 'View') {
            setDisp([{}, 'Hide'])
        } else if (disp[1] === 'Hide') {
            setDisp([{ display: 'none' },'View'])
        }
    }
    const likeBlog = () => {
        like(blog, user)
    }
    const deleteBlog = () => {
        try {
            window.confirm('Are you sure you would like to delete this blog?') ? BlogService.deleteBlog(blog) : null
            dispatch(removeBlog(blog))

        } catch {
            window.alert('Error! Cannot delete blog, please try again later')
        }
    }

    return (
        <div style={blogStyle}>
            <p>{blog.title} {blog.author} <button onClick={() => toggleVisibility()}>{disp[1]}</button></p>
            <div style={disp[0]} className='toggleVis'>
                <p>url: {blog.url}</p>
                <p className='likeCount'>likes: {blog.likes}<button onClick={() => likeBlog()}>like</button></p>
                <p>user: {blog.user ? blog.user.name : 'not found'}</p>
                {blog.user.id === user.id ? <button onClick={() => deleteBlog()}>remove</button> : null}
            </div>
        </div>
    )
}

export default Blog