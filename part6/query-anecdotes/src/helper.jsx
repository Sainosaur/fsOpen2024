import { useContext } from "react"
import { NotificationContext } from "./components/NotificationContext"

export const useMessageValue = () => {
    const res = useContext(NotificationContext)
    return res[0]
}

export const useMessageDispatch = () => {
    const res = useContext(NotificationContext)
    return res[1]
}