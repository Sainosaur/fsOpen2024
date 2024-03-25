import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        console.log(state)
        const filteredAnecdotes = state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
        return filteredAnecdotes
    })
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setMessage(`you voted '${anecdote.content}'`, 5))
    }

    return (
        <>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
            </div>
        </div>
      )}
        </>
    )
}

export default AnecdoteList