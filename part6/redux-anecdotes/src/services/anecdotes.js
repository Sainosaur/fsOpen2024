import axios from "axios"

const getAll = async () => {
    try {
        const anecdotes = await axios.get('http://localhost:3001/anecdotes')
        return anecdotes.data
    } catch {
        console.log("Server error!")
    }
}

const addNew = async (anec) => {
    try {
        await axios.post('http://localhost:3001/anecdotes', anec)
    } catch {
        console.log('Server error cannot POST')
    }
}

const replace = async (anec) => {
    try {
        await axios.put(`http://localhost:3001/anecdotes/${anec.id}`, anec)
    } catch {
        console.log('Server error cannot PUT')
    }
}
export default {
    getAll,
    addNew,
    replace
}