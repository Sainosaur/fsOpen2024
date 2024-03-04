import loginService from '../services/login'
import {useState} from 'react'

const Login = ({user, password, setUser, setPassword}) => {
  const [usr, setUsr] = useState(null)
  const [pwd, setPwd] = useState(null)

  const updateUsr = (event) => {
      setUsr(event.target.value)
  }
  const updatePwd = (event) => {
      setPwd(event.target.value)
  }
  const obtainToken = () => {
    loginService(usr,pwd).then(response => {
        setUser(response.data)
    })
  }
  return (
      <div>
          <p>username: <input value={usr} onChange={() => updateUsr(event)} /></p>
          <p>password: <input value={pwd} onChange={() => updatePwd(event)} type="password"/></p>
          <button onClick={() => obtainToken(user, password)}>Submit</button>
      </div>
  )
}

export default Login