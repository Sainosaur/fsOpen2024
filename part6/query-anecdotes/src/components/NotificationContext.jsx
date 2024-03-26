import { createContext, useReducer } from 'react'

const notificationReducer = (state, action) => {
    switch(action.type) {
        case 'SET':
            return action.payload
        case 'RESET':
            return ''
        default:
            return state
    }
}

export const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [message, messageDispatch] = useReducer(notificationReducer, 0)
    return (
        <NotificationContext.Provider value={[message, messageDispatch]} >
            {props.children}
        </NotificationContext.Provider>
    )
}