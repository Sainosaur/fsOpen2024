import { useDispatch, useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import blogService from '../services/blog'
import { updateBlogLike } from "../stores/blog"
import { removeBlog } from "../stores/blog"

const BlogPage = () => {
    const params = useParams()
    const blog = useSelector(state => state.blog).find(blog => blog.id === params.id)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const likeBlog = () => {
        blogService.likeBlog(blog, user)
        dispatch(updateBlogLike(blog))
    }
    if (!blog) {
        return (
            <>
                <p>Blog deleted!</p>
                <Link to={'..'}>Return to home page</Link>
            </>

        )
    }
    const deleteBlog = () => {
        try {
            window.confirm('Are you sure you would like to delete this blog?') ? blogService.deleteBlog(blog) : null
            dispatch(removeBlog(blog))
        } catch {
            window.alert('Error! Cannot delete blog, please try again later')
        }
    }
    return (
        <>
            <h1>{blog.title}</h1>
            <a href={blog.url}>{blog.url}</a>
            <p>{blog.likes} likes <button onClick={likeBlog}>like</button></p>
            <p>added by {blog.user.name}</p>
            {user.id == blog.user.id ? <button onClick={deleteBlog}>Delete</button> : null}
        </>
    )
}

export default BlogPage