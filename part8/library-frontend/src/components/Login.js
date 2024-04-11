import { useMutation } from "@apollo/client"
import { useState, useEffect } from "react"
import { LOGIN } from "../queries"


const LoginForm = ({setToken}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const [Login, result] = useMutation(LOGIN)

    useEffect(() => {
        if (result.data) {
            setToken(result.data.login.value)
            localStorage.setItem('user_token', result.data.login.value)
        }
    }, [result])
    
    const submit = (event) => {
        event.preventDefault()
        Login({
            variables: {
                username: user,
                password: pass
            }
        })
    }

     return (
        <div>
            <form onSubmit={submit}>
                <p>Username: <input onChange={({target}) => setUser(target.value)} value={user} /></p>
                <p>Password: <input type="password" onChange={({target}) => setPass(target.value)} value={pass} /></p>
                <button type="submit">Submit</button>
            </form>
        </div>
     )
}

export default LoginForm