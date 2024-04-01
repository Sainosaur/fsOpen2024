import axios from 'axios'
import { useDispatch } from 'react-redux'

const userService = async () => {
    const res = await axios.get('http://localhost:3003/api/users')
    return res.data
}
export default userService