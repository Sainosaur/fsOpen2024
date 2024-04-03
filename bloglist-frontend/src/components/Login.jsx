import { useDispatch } from 'react-redux'
import loginService from '../services/login'
import Notification from './Notification'
import { useState } from 'react'
import { ResetNotification, SetNotification } from '../stores/notification'
import { setUser } from '../stores/user'
import { Button, Input } from '@nextui-org/react'

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
                dispatch(SetNotification({ message: 'wrong username or password', color: 'danger'}))
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
                <Input variant='bordered' value={usr} onChange={() => updateUsr(event)} label="Username" className='UserField' />
                <Input variant='bordered' value={pwd} onChange={() => updatePwd(event)} type="password" label="Password" className='PwdField'/>
                <Button color='primary' onClick={() => obtainToken()}>Submit</Button>
            </div>
        </>
    )
}

export default Login