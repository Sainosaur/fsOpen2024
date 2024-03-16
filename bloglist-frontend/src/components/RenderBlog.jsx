import { useState, useEffect, useRef } from 'react'
import Blog from '../components/Blog'
import blogService from '../services/blogs'
import NewBlog from './NewBlog'
import VisibilityComponent from './Visibility'

const RenderBlog = ({ setUser, user }) => {
    const [blogs, setBlogs] = useState([])
    const GlobalToggle = useRef()
    const likeBlog = (blog, user) => {
        blogService.likeBlog(blog, user)
    }
    const addBlog = async (title, author, url, user, setMessage, selfToggle) => {
        try{
            await blogService.addBlog(title, author, url, user)
            setMessage([`a new blog ${title} by ${author} added!`, 'green']),
            setTimeout(() => {
                setMessage(['null', 'green'])
                // uses referenced self toggle function to automatically hide the form after blog is added.
                selfToggle()
            }, '5000')
        } catch {
            setMessage([`${title} by ${author} couldn't be added, please try again later`, 'red']),
            setTimeout(() => {
                setMessage(['null', 'green'])
            }, '5000')
            console.log(self)
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