import { createSlice } from "@reduxjs/toolkit"
import getAll from '../services/anecdotes'


const asObject = (anecdote) => {
  return {
    content: anecdote,
    id,
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAction(state, action) {
      const id = action.payload
      const anec = state.find(anecdote => anecdote.id === id)
      const newAnec = {
        ...anec,
        votes: anec.votes + 1
      }
      const newState = state.map(anecdote => anecdote.id === id ? newAnec : anecdote)
      return newState.sort((a, b) => b.votes - a.votes)
    },
    newAction(state, action) {     
      const newAnecdote = asObject(action.payload)
      return state.concat(newAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export default anecdoteSlice.reducer

export const { voteAction, newAction, setAnecdotes } = anecdoteSlice.actions