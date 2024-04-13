import { createSlice } from '@reduxjs/toolkit'


const NotificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification: (state, action) => {
            return action.payload
        }, resetNotification: () => {
            return ''
        }
    }
})

export default NotificationSlice.reducer

export const { setNotification, resetNotification} = NotificationSlice.actions
