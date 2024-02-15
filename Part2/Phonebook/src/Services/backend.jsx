import axios from 'axios'

let url = 'http://localhost:3001/api/persons'

const retrieveData = () => {
    return axios.get(url).then(response => response.data)
}

const AppendServer = (contact) => {
    return axios.post(url, contact).then(response => {response})
}

const deleteData = (contact) => {
    return axios.delete(`${url}/${contact.id}`)

}

const updateNumber = (oldContact, newContact) => {
    return axios.put(`${url}/${oldContact.id}`, newContact).then(response => response.data)
}


export default {url, AppendServer, retrieveData, deleteData, updateNumber}