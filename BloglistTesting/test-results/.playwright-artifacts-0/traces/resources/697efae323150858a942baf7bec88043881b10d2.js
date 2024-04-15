import { createSlice } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=b835e62f"
import userService from "/src/services/users.js"

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        setUsers(state, action) {
            return action.payload
        }, resetUsers(state, action) {
            return []
        }
    }
})

export default usersSlice.reducer
export const { setUsers, resetUsers} = usersSlice.actions