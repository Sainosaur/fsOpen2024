import { useState, useEffect, useRef } from 'react'
import Blog from '../components/Blog'
import blogService from '../services/blog'
import NewBlog from './NewBlog'
import VisibilityComponent from './Visibility'
import { useDispatch, useSelector } from 'react-redux'
import { SetNotification, ResetNotification } from '../stores/notification'
import { setBlogs, addBlog, updateBlogLike } from '../stores/blog'

const RenderBlog = () => {
    const user = useSelector(state => state.user)
    const GlobalToggle = useRef()
    const dispatch = useDispatch()
    const likeBlog = (blog, user) => {
        blogService.likeBlog(blog, user)
        dispatch(updateBlogLike(blog))
    }
    const onAddBlog = async (title, author, url, user, selfToggle) => {
        try{
            const res = await blogService.addBlog(title, author, url, user)
            dispatch(addBlog(res.data))
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
            dispatch(setBlogs(blogs.sort((a, b) => b.likes - a.likes)))
        )
    }, [])
    const blogs = useSelector(state => state.blog)
    return (
        <>
            <div>
                <VisibilityComponent invisiblemessage="new blog" visiblemessage="cancel" ref={GlobalToggle}>
                    <NewBlog user={user} selfToggle={GlobalToggle} addBlog={onAddBlog} />
                </VisibilityComponent>
                {blogs.map(blog => <Blog key={blog.id} blog={blog} user={user} setBlogList={setBlogs} blogList={blogs} like={likeBlog}/>)}
            </div>
        </>
    )
}

export default RenderBlog