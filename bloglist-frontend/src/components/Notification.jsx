import { useSelector } from "react-redux"


const Notification = () => {
    const content = useSelector(state => state.notification)
    const style = {
        color: content.color,
        borderStyle: 'Solid',
        borderColor: content.color,
        borderRadius: 5,
        fontStyle: 'italic',
        padding: 10,
        fontSize: 30
    }
    if (content.message !== 'NULL') {
        return (
            <>
                <h1 style={style}>{content.message}</h1>
            </>
        )
    }
}

export default Notification