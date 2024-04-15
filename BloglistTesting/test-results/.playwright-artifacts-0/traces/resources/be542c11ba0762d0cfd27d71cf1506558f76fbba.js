import { createSlice } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=b835e62f"

const initalState = {
    message: 'NULL',
    color: 'red'
}

const notificationSlice = createSlice({
    name:'notifcation',
    initialState: initalState,
    reducers:{
        SetNotification(state, action) {
            return action.payload
    }, ResetNotification(state, action) {
        return initalState
        }
    }
})

export const {
    SetNotification,
    ResetNotification
} = notificationSlice.actions 

export default notificationSlice.reducer
