import axios from "axios"

const getAll = async () => {
    try {
        const anecdotes = await axios.get('http://localhost:3001/anecdotes')
        return anecdotes.data
    } catch {
        console.log("Server error!")
    }
}

export default {
    getAll
}