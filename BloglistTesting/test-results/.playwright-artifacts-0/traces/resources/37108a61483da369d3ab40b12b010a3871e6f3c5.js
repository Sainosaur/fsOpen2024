import axios from "/node_modules/.vite/deps/axios.js?v=b835e62f"
import { useDispatch } from "/node_modules/.vite/deps/react-redux.js?v=b835e62f"

const userService = async () => {
    const res = await axios.get('http://localhost:3003/api/users')
    return res.data
}
export default userService