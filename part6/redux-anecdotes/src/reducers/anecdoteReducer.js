import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'


const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
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
      anecdoteService.addNew(newAnecdote)
      return state.concat(newAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export default anecdoteSlice.reducer

export const { voteAction, newAction, setAnecdotes } = anecdoteSlice.actions

// Redux thunk based action constructor function
export const getAnecdotes = () => {
  // Essentially transforms itself into an asynchronous function
  return async dispatch => {
    // Calls back end to get the anecdotes
    const anecdotes = await anecdoteService.getAll()
    // Sends dispatch with anecdotes list
    dispatch(setAnecdotes(anecdotes))
  }
}