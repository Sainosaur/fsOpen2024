import { useState } from 'react'
import Notification from './Notification'
import { useDispatch } from 'react-redux'

const NewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    return (
        <>
            <Notification />
            <div>
                <h2>Create new:</h2>
                <p>title: <input value={title} onChange={({ target }) => setTitle(target.value)} className='Title'></input></p>
                <p>author: <input value={author} onChange={({ target }) => setAuthor(target.value)} className='Author'></input></p>
                <p>url: <input value={url} onChange={({ target }) => setUrl(target.value)} className='Url'></input></p>
                <button onClick={() => {
                    props.addBlog(title, author, url, props.user, props.selfToggle.current.toggleVisibility)
                }}>create</button>
            </div>
        </>
    )
}

export default NewBlog