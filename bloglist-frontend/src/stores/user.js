import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: JSON.parse(window.localStorage.getItem('user')),
    reducers: {
        setUser(state, action) {
            return action.payload
        }, logOut(state, action) {
            window.localStorage.clear()
            window.location.reload()
            return ''
        }
    }
})

export default userSlice.reducer
export const { setUser, logOut } = userSlice.actions