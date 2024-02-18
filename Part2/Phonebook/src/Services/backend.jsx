import axios from 'axios'

let url = 'http://localhost:3000/api/persons'

const retrieveData = () => {
    return axios.get(url).then(response => response.data)
}

const AppendServer = (contact) => {
    return axios.post(url, contact).then(response => {response})
}

const deleteData = (contact) => {
    console.log(contact)
    return axios.delete(`${url}/${contact._id}`)

}

const updateNumber = (oldContact, newContact) => {
    return axios.put(`${url}/${oldContact._id}`, newContact).then(response => response.data)
}


export default {url, AppendServer, retrieveData, deleteData, updateNumber}