import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const User = () => {
    const params = useParams()
    const user = useSelector(state => state.users).find(user => user.id === params.id)
    if (!user) {
        return (
            <>
                Error! User cannot be found, Please try again from the users menu. This page does not support direct access through URLs
            </>
        )
    }
    return (
        <>
        <h1>{user.name}</h1>
        <h2> added blogs:</h2>
        <ul>
            {user.blogs.map(blog => <li> {blog.title}</li>)}
        </ul>
        </>

    )
}

export default User