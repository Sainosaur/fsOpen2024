import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUsers, resetUsers } from "../stores/users"
import userService from "../services/users"

const RenderUser = ({user}) => {
    return (
        <div>
            <tr>
                <td>{user.name}</td>
                <td>{user.blogs.length}</td>
            </tr>
        </div>
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
        <div>
            <h1>Users</h1>
            <th>
                <td>User</td>
                <td>Blogs Created</td>
            </th>
            {users ? users.map(user =><RenderUser user ={user} /> ) : null}
        </div>
    )
}

export default Users