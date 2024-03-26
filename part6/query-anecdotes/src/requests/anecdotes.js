import axios from 'axios'


export const getAnecdotes = () => {
    return axios.get('http://localhost:3001/anecdotes').then(res => res.data)
}

export const sendAnecdote = (anecdote) => {
    return axios.post('http://localhost:3001/anecdotes', anecdote).then(res => res.data)
}