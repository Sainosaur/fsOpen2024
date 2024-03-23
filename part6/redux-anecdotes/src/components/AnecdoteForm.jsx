import { useDispatch } from 'react-redux'
import { newAction } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const newAnecdote = (event) => {
        event.preventDefault()
        dispatch(newAction(event.target.content.value))
      }
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={newAnecdote}>
            <div><input name='content' /></div>
            <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm