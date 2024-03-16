import { useState } from 'react'
import BlogService from '../services/blogs'
import Notification from './Notification'

const addBlog = async (title, author, url, user, setMessage, selfToggle) => {
    try{
        await BlogService.addBlog(title, author, url, user)
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

const NewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [message, setMessage] = useState(['null','green'])

    return (
        <>
            <Notification message={message[0]} color={message[1]} />
            <div>
                <h2>Create new:</h2>
                <p>title: <input value={title} onChange={({ target }) => setTitle(target.value)}></input></p>
                <p>author: <input value={author} onChange={({ target }) => setAuthor(target.value)}></input></p>
                <p>url: <input value={url} onChange={({ target }) => setUrl(target.value)}></input></p>
                <button onClick={() => {
                    addBlog(title, author, url, props.user, setMessage, props.selfToggle.current.toggleVisibility)
                }}>create</button>
            </div>
        </>
    )
}

export default NewBlog