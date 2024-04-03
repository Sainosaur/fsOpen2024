import { useEffect, useRef } from 'react'
import Blog from '../components/Blog'
import blogService from '../services/blog'
import NewBlog from './NewBlog'
import VisibilityComponent from './Visibility'
import { useDispatch, useSelector } from 'react-redux'
import { SetNotification, ResetNotification } from '../stores/notification'
import { setBlogs, addBlog, updateBlogLike } from '../stores/blog'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from '@nextui-org/react'

const RenderBlog = () => {
    const user = useSelector(state => state.user)
    const { isOpen, onOpen,  onOpenChange } = useDisclosure()
    const GlobalToggle = useRef()
    const dispatch = useDispatch()

    const onAddBlog = async (title, author, url, user, selfToggle) => {
        try{
            const res = await blogService.addBlog(title, author, url, user)
            dispatch(addBlog(res.data))
            dispatch(SetNotification({message:`a new blog ${title} by ${author} added!`, color: 'success'})),
            setTimeout(() => {
                dispatch(ResetNotification())
                // uses referenced self toggle function to automatically hide the form after blog is added.
            }, '5000')
        } catch {
            dispatch(SetNotification({message: `${title} by ${author} couldn't be added, please try again later`, color: 'danger'})),
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
                <Button onPress={onOpen} color='primary'>Create New Blog</Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                        {(onClose) => (
                            <>
                            <ModalHeader className="flex flex-col gap-1">Create New Blog</ModalHeader>
                            <ModalBody>
                                <NewBlog user={user} selfToggle={GlobalToggle} addBlog={onAddBlog} />
                            </ModalBody>
                            </>
                        )}
                        </ModalContent>
                    </Modal>
                {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
            </div>
        </>
    )
}

export default RenderBlog