import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUsers, resetUsers } from "../stores/users"
import { Link } from 'react-router-dom' 
import userService from "../services/users"

const RenderUser = ({user}) => {
    return (
        <>
            <tr>
                <td key={user.id}><Link to={`${user.id}`}>{user.name}</Link></td>
                <td key={user.blogs.length}>{user.blogs.length}</td>
            </tr>
        </>
    )
}

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    useEffect(() => {
        userService().then((data) => {
            dispatch(setUsers(data))
        })
    }, [])
    console.log(users)
    return (
        <>
            <h1>Users</h1>
            <tr>
                <th>User</th>
                <th>Blogs Created</th>
            </tr>
            {users ? users.map(user =><RenderUser user ={user} /> ) : null}
        </>
    )
}

export default Users