import { useEffect } from 'react'
import {initializeNotes} from './reducer/noteReducer'
import './index.css'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'

import { useDispatch, UseDispatch } from 'react-redux'

//app component
const App =()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(initializeNotes())
  },[])
  
  return(
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    
    </div>
  )
}


export default App
