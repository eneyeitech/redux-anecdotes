import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/Anecdote'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App