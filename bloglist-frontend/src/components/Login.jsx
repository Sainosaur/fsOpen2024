import loginService from '../services/login'
import {useState} from 'react'

const Login = ({setUser}) => {
  const [usr, setUsr] = useState("")
  const [pwd, setPwd] = useState("")

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
    })
  }
  return (
      <div>
          <p>username: <input value={usr} onChange={() => updateUsr(event)} /></p>
          <p>password: <input value={pwd} onChange={() => updatePwd(event)} type="password"/></p>
          <button onClick={() => obtainToken()}>Submit</button>
      </div>
  )
}

export default Login