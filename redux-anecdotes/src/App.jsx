import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/Anecdotes'
import Filter from './components/Filter'
import Notification from './components/Notification'
import './index.css'
import { useEffect } from 'react'
import {initializeAnecdotes} from './reducers/anecdoteReducer' // this is thunk function
import { useDispatch } from 'react-redux'
const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(initializeAnecdotes())
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