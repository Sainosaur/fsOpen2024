import { useDispatch, useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import blogService from '../services/blog'
import { updateBlogLike } from "../stores/blog"
import { removeBlog } from "../stores/blog"
import { useState, useEffect } from "react"
import { Button, Card, Input, CardBody, Tabs, Tab, ButtonGroup } from "@nextui-org/react"

const BlogPage = () => {
    const params = useParams()
    const [comment, setComment] = useState('')
    const blog = useSelector(state => state.blog).find(blog => blog.id === params.id)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const likeBlog = () => {
        blogService.likeBlog(blog, user)
        dispatch(updateBlogLike(blog))
    }
    if (!blog) {
        return (
            <>
                <p>Blog deleted!</p>
                <Link to={'..'}>Return to home page</Link>
            </>

        )
    }
    const addComment = () => {
        blogService.commentBlog(blog.id, comment)
    }
    const deleteBlog = () => {
        try {
            window.confirm('Are you sure you would like to delete this blog?') ? blogService.deleteBlog(blog) : null
            dispatch(removeBlog(blog))
        } catch {
            window.alert('Error! Cannot delete blog, please try again later')
        }
    }
    return (
        <>
        <Card>
            <CardBody>
                <Tabs>
                    <Tab title="Blog">
                        <h1>{blog.title}</h1>
                        <p>{blog.likes} likes </p>
                    </Tab>
                    <Tab title="URL">
                        <a href={blog.url}>{blog.url}</a>
                    </Tab>
                    <Tab title="User">
                        <p>Blog added by {blog.user.name}</p>
                    </Tab>
                </Tabs>
                <ButtonGroup>
                {user.id == blog.user.id ? <Button color="danger" variant="ghost" onClick={deleteBlog}>Delete</Button> : null}
                <Button variant="bordered" color="success" onClick={likeBlog}>Like Blog</Button>
                </ButtonGroup>
                <Input value={comment} label="Comment..." onChange={() => setComment(event.target.value)}/><Button color="primary" variant="flat"  onClick={addComment}>add comment</Button>
            </CardBody>
        </Card>
            <h1>Comments:</h1>
            <Card>
                    {blog.comments.map(comment => <CardBody>
                            <p key={blog.id + comment}>{comment}</p>
                        </CardBody>)}
            </Card>
        </>
    )
}

export default BlogPage