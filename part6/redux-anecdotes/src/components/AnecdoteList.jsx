import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        console.log(state)
        const filteredAnecdotes = state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
        return filteredAnecdotes
    })
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        setTimeout(() => {
            dispatch(resetNotification())
        }, "5000"),dispatch(setNotification(`you voted '${anecdote.content}'`))
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