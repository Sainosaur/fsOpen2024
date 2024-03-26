import { useMessageValue } from '../helper'

const Notification = () => {
  const message = useMessageValue()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (message == '') {
    return null
  }
  else {
    return (
      <div style={style}>
        {message}
      </div>
    )
  }
}

export default Notification
