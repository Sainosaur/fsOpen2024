import { createSlice } from "@reduxjs/toolkit"
import userService from "../services/users"

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