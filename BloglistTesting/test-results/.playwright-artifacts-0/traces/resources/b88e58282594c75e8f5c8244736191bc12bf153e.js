import { createSlice, current } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=b835e62f"

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
        }, updateBlogLike(state, action) {
            const usableState = current(state)
            return usableState.map(bl => bl == action.payload ? {...bl, likes: bl.likes + 1} : bl)
        }, removeBlog(state, action) {
            const usableState = current(state)
            return usableState.filter(bl => bl !== action.payload)
        } 
    }
})

export default blogSlice.reducer
export const { setBlogs, addBlog, resetBlog, updateBlogLike, removeBlog } = blogSlice.actions