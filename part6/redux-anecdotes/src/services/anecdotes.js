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

export default {
    getAll,
    addNew
}