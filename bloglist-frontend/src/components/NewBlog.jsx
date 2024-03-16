import { useState } from 'react'
import Notification from './Notification'

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
                <p>title: <input value={title} onChange={({ target }) => setTitle(target.value)} className='Title'></input></p>
                <p>author: <input value={author} onChange={({ target }) => setAuthor(target.value)} className='Author'></input></p>
                <p>url: <input value={url} onChange={({ target }) => setUrl(target.value)} className='Url'></input></p>
                <button onClick={() => {
                    props.addBlog(title, author, url, props.user, setMessage, props.selfToggle.current.toggleVisibility)
                }}>create</button>
            </div>
        </>
    )
}

export default NewBlog