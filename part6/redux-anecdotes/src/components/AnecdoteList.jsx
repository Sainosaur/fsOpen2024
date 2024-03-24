import { useSelector, useDispatch } from 'react-redux'
import { voteAction} from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        console.log(state)
        const filteredAnecodtes = state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
        return filteredAnecodtes
    })
    const dispatch = useDispatch()

    const vote = (id) => {
    dispatch(voteAction(id))
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
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
        </div>
      )}
        </>
    )
}

export default AnecdoteList