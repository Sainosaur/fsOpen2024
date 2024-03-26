import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery } from '@tanstack/react-query'
import { getAnecdotes } from './requests/anecdotes'
const App = () => {
  const handleVote = (anecdote) => {
    console.log('vote')
  }
  const res = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 3
  })
  if (res.isLoading) {
    return (<div>
      Loading data...
    </div>)
  }
  if (res.isError) {
    return (<div>
      Server Error: Cannot get data please try again later!
    </div>)
  }
  const anecdotes = res.data
  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
