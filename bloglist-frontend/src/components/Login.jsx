import loginService from '../services/login'
import Notification from './Notification'
import {useState} from 'react'

const Login = ({setUser}) => {
  const [usr, setUsr] = useState("")
  const [pwd, setPwd] = useState("")
  const [message, setMessage] = useState(["null","red"])

  const updateUsr = (event) => {
      setUsr(event.target.value)
  }
  const updatePwd = (event) => {
      setPwd(event.target.value)
  }
  const obtainToken = () => {
    loginService(usr,pwd).then(response => {
        window.localStorage.setItem("user", JSON.stringify(response.data))
        setUser(response.data)
    }).catch(
        setMessage(["wrong username or password", "red"]),
        setTimeout(() => {
            setMessage(["null", "red"])
        }, "5000")
    )
  }
  return (
    <>
    <Notification message={message[0]} color={message[1]}/>
      <div>
          <p>username: <input value={usr} onChange={() => updateUsr(event)} /></p>
          <p>password: <input value={pwd} onChange={() => updatePwd(event)} type="password"/></p>
          <button onClick={() => obtainToken()}>Submit</button>
      </div>
    </>
  )
}

export default Login