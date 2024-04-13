import { useSelector } from 'react-redux'

const Notification = ({ value }) => {
    const notificationStyle = {
        color: 'Red'
    }
    const NotificationContent = useSelector(state => state.notification)
    if (NotificationContent === '') {
        return null
    } else {
        return (
            <div>
                <p style={notificationStyle}>{NotificationContent}</p>
            </div>
        )
    }
}

export default Notification