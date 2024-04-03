import { Link } from 'react-router-dom'
import {Card, CardBody} from "@nextui-org/react"

const Blog = ({ blog }) => {
    const blogStyle = {
        color: 'blue',
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }
    return (
        <Card >
            <CardBody>
                <Link to={`/blogs/${blog.id}`}>{blog.title} {blog.author}</Link>
            </CardBody>
        </Card>
    )
}

export default Blog