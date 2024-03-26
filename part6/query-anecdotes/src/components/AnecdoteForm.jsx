import { useQueryClient ,QueryClient, useMutation } from "@tanstack/react-query"
import { sendAnecdote } from "../requests/anecdotes"
import { useMessageDispatch } from "../helper"

const getID = () => {
  return Math.floor(Math.random()*90000) + 10000
}

const AnecdoteForm = () => {
  const messageDispatch = useMessageDispatch()
  const queryClient = useQueryClient()
  const addAnecdoteMutation = useMutation({ mutationFn:sendAnecdote, onSuccess: (res) => {
  queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
  setTimeout(() => {
    messageDispatch({type: 'RESET' })
  }, '5000'), messageDispatch({
    type:'SET',
    payload: `'${res.content}' added`
  })
  } , onError: (err) => {
    setTimeout(() => {
      messageDispatch({type: 'RESET' })
    }, '5000'), messageDispatch({
      type:'SET',
      payload: 'Anecdote too short...  Anecdotes must have a length of 5 or greater. Please Try Again!'
    })
    
  }})
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    addAnecdoteMutation.mutate({content, votes: 0, id: getID()})
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
