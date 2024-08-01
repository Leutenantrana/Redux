import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/Anecdotes'
import Filter from './components/Filter'
import Notification from './components/Notification'
import './index.css'
import { useEffect } from 'react'
import anecdoteService from './services/anecdotes'
import {setAnecdotes} from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    anecdoteService.getAll().then(anecdotes =>{
      dispatch(setAnecdotes(anecdotes))
    })
  })
  

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <Anecdotes />
      <h2>create new anecdote</h2>
      <NewAnecdote />
    </div>
  )
}

export default App