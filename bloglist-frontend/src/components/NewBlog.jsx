import { useState } from 'react'
import Notification from './Notification'
import { Button, Input } from '@nextui-org/react'

const NewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    return (
        <>
            <Notification />
            <div>
                <Input value={title} label='Title' onChange={({ target }) => setTitle(target.value)} className='Title' />
                <Input value={author} label='Author' onChange={({ target }) => setAuthor(target.value)} className='Author' />
                <Input value={url} label='URL' onChange={({ target }) => setUrl(target.value)} className='Url' />
                <Button color='primary' variant='bordered'  onClick={() => {
                    props.addBlog(title, author, url, props.user)
                }}>Create</Button>
            </div>
        </>
    )
}

export default NewBlog