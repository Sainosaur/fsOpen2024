import {useState} from 'react'
import BlogService from '../services/blogs'
import Notification from './Notification'

const addBlog = (title, author, url, user, setMessage) => {
    const result = BlogService.addBlog(title, author, url, user)
    setMessage([`a new blog ${title} by ${author} added!`, "green"]),
    setTimeout(() => setMessage(["null", "green"]), "5000")
}

const NewBlog = (user) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("")
    const [message, setMessage] = useState(["null","green"])

    return (
        <>
            <Notification message={message[0]} color={message[1]} />
            <div>
            <h2>Create new:</h2>
            <p>title: <input value={title} onChange={({target}) => setTitle(target.value)}></input></p>
            <p>author: <input value={author} onChange={({target}) => setAuthor(target.value)}></input></p>
            <p>url: <input value={url} onChange={({target}) => setUrl(target.value)}></input></p>
            <button onClick={() => addBlog(title, author, url, user, setMessage)}>create</button>
            </div>
        </>
    )
}

export default NewBlog