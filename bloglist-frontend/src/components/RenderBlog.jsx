import { useState, useEffect, useRef } from 'react'
import Blog from '../components/Blog'
import blogService from '../services/blogs'
import NewBlog from './NewBlog'
import VisibilityComponent from './Visibility'
import { useDispatch } from 'react-redux'
import { SetNotification, ResetNotification } from '../reducers/notification'

const RenderBlog = ({ setUser, user }) => {
    const [blogs, setBlogs] = useState([])
    const GlobalToggle = useRef()
    const dispatch = useDispatch()
    const likeBlog = (blog, user) => {
        blogService.likeBlog(blog, user)
    }
    const addBlog = async (title, author, url, user, selfToggle) => {
        try{
            await blogService.addBlog(title, author, url, user)
            dispatch(SetNotification({message:`a new blog ${title} by ${author} added!`, color: 'green'})),
            setTimeout(() => {
                dispatch(ResetNotification())
                // uses referenced self toggle function to automatically hide the form after blog is added.
                selfToggle()
            }, '5000')
        } catch {
            dispatch(SetNotification({message: `${title} by ${author} couldn't be added, please try again later`, color: 'red'})),
            setTimeout(() => {
                dispatch(ResetNotification())
            }, '5000')
        }
    }
    useEffect(() => {
        blogService.getAll().then(blogs =>
            setBlogs(blogs.sort((a, b) => b.likes - a.likes))
        )
    }, [])
    return (
        <>
            <div>
                <p>{`${String(user.name)} logged in`}<button onClick={() => {
                    setUser('')
                    // reloads the window to repeat the user checking process and return to a login screen
                    window.location.reload()
                    window.localStorage.clear()
                }}>Log Out</button></p>
                <VisibilityComponent invisiblemessage="new blog" visiblemessage="cancel" ref={GlobalToggle}>
                    <NewBlog user={user} selfToggle={GlobalToggle} addBlog={addBlog} />
                </VisibilityComponent>
                {blogs.map(blog => <Blog key={blog.id} blog={blog} user={user} setBlogList={setBlogs} blogList={blogs} like={likeBlog}/>)}
            </div>
        </>
    )
}

export default RenderBlog