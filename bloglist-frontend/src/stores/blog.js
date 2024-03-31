import { createSlice } from "@reduxjs/toolkit"

const initalState = [];

const blogSlice = createSlice({
    name:'blog',
    initialState : initalState,
    reducers: {
        setBlogs(state, action){
            return action.payload
        }, addBlog(state, action) {
            const newState = state.concat(action.payload)
            return newState
        }, resetBlog(state, action) {
            return initalState
        }
    }
})

export default blogSlice.reducer
export const { setBlogs, addBlog, resetBlog } = blogSlice.actions