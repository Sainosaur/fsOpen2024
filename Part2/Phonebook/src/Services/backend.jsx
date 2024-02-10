import axios from 'axios'

const retrieveData = (url) => {
    return axios.get(url).then(response => response.data)
}

const AppendServer = (url,contact) => {
    return axios.post(url, contact).then(response => {response})
}

export default {AppendServer, retrieveData}