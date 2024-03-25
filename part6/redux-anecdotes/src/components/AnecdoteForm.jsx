import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const newAction = (event) => {
        event.preventDefault()
        dispatch(newAnecdote(event.target.content.value))
        setTimeout(() => {
            dispatch(resetNotification())
        }, "5000"),dispatch(setNotification(`you added '${event.target.content.value}'`))
      }
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={newAction}>
            <div><input name='content' /></div>
            <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm