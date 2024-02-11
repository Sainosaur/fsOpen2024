import axios from 'axios'

let url = 'http://localhost:3001/persons'

const retrieveData = () => {
    return axios.get(url).then(response => response.data)
}

const AppendServer = (contact) => {
    return axios.post(url, contact).then(response => {response})
}

const deleteData = (contact) => {
    axios.delete(`${url}/${contact.id}`).then(response => {
        console.log(`Deleted ${contact}`)
    }).catch(() => alert("An error occured please refresh and try again"))

}

const updateNumber = (oldContact, newContact) => {
    return axios.put(`${url}/${oldContact.id}`, newContact).then(response => response.data)
}


export default {url, AppendServer, retrieveData, deleteData, updateNumber}