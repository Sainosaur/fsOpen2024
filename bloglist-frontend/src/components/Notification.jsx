
const Notification = ({message, color}) => {
    const style = {
        color,
        borderStyle: 'Solid',
        borderColor: color,
        borderRadius: 5,
        fontStyle: 'italic',
        padding: 10,
        fontSize: 30
      }
      if (message != "null") {
        return (
            <>
            <h1 style={style}>{message}</h1>
            </>
        )
      }
}

export default Notification