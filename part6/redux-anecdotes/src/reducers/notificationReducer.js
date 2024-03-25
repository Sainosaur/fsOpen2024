import { createSlice } from "@reduxjs/toolkit"
const initialState = ''
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
        resetNotification(state, action) {
            return initialState
        }
    }
})

export default notificationSlice.reducer
export const {setNotification, resetNotification} = notificationSlice.actions

export const setMessage = (message, time) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(resetNotification())
        }, `${time*1000}`),dispatch(setNotification(message))
    }
}