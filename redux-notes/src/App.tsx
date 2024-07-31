import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Notes from './components/Notes'
import NewNote from './components/NewNote'

//app component
const App =()=>{
  
  return(
    <div>
      <NewNote />
      <Notes />

    </div>
  )
}


export default App
