import { useQueryClient ,QueryClient, useMutation } from "@tanstack/react-query"
import { sendAnecdote } from "../requests/anecdotes"

const getID = () => {
  return Math.floor(Math.random()*90000) + 10000
}

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const addAnecdoteMutation = useMutation({ mutationFn:sendAnecdote, onSuccess: () => {
  queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
  } })
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
