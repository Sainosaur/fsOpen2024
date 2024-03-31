import { useDispatch } from 'react-redux'
import loginService from '../services/login'
import Notification from './Notification'
import { useState } from 'react'
import { ResetNotification, SetNotification } from '../stores/notification'
import { setUser } from '../stores/user'

const Login = () => {
    const [usr, setUsr] = useState('')
    const [pwd, setPwd] = useState('')
    const dispatch = useDispatch()

    const updateUsr = (event) => {
        setUsr(event.target.value)
    }
    const updatePwd = (event) => {
        setPwd(event.target.value)
    }
    const obtainToken = () => {
        loginService(usr,pwd).then(response => {
            window.localStorage.setItem('user', JSON.stringify(response.data))
            dispatch(setUser(response.data))
        }).catch(
            // waits for half a second before setting error message to ensure the request has actually failed
            setTimeout(() => {
                dispatch(SetNotification({ message: 'wrong username or password', color: 'red'}))
            }, '500'),
            setTimeout(() => {
                dispatch(ResetNotification())
            }, '5000')
        )
    }
    return (
        <>
            <Notification/>
            <div>
                <p>username: <input value={usr} onChange={() => updateUsr(event)} className='UserField' /></p>
                <p>password: <input value={pwd} onChange={() => updatePwd(event)} type="password" className='PwdField'/></p>
                <button onClick={() => obtainToken()}>Submit</button>
            </div>
        </>
    )
}

export default Login