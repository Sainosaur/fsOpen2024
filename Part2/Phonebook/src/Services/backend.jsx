import axios from 'axios'

const AppendServer = (url,contact) => {
    return axios.post(url, contact).then(response => response)
}

export default {AppendServer}