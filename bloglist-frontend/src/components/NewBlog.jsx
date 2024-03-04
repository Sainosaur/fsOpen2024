import {useState} from 'react'
import BlogService from '../services/blogs'

const NewBlog = (user) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("")
    return (
        <div>
        <h2>Create new:</h2>
        <p>title: <input value={title} onChange={({target}) => setTitle(target.value)}></input></p>
        <p>author: <input value={author} onChange={({target}) => setAuthor(target.value)}></input></p>
        <p>url: <input value={url} onChange={({target}) => setUrl(target.value)}></input></p>
        <button onClick={() => BlogService.addBlog(title, author, url, user)}>create</button>
        </div>
    )
}

export default NewBlog