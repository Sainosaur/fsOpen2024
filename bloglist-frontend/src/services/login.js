import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/login/'

const loginService = (user, password) => {
    const config = {
        username : user,
        password : password
    }
    const response = axios.post(baseUrl, config)
    return response
}

export default loginService