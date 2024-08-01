import { updateAnecdote, deleteAnecdotes } from "../reducers/anecdoteReducer"
import { useDispatch, useSelector } from "react-redux"
import {  setNotification } from "../reducers/notificationReducer"
const Anecdote = ({anecdote, handleClick, handleClickDelete})=>{

    return(
        <>
          <div className="mainDiv" key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div className="btns">
              <div>
                  total votes : {anecdote.votes}
                  <button onClick={() => handleClick()}> vote</button>
              </div>
              <div>
                <button onClick={() => handleClickDelete()} className="delete">Delete</button>
              </div>
       
            </div>
           
        </div>
        </>
    )
}

const Anecdotes =()=>{

   const dispatch = useDispatch()
   const filter = useSelector(state=>state.filter)
   let anecdotes = useSelector(state => state.anecdotes)
   anecdotes = [...anecdotes].sort((a,b)=> b.votes -a.votes);
   const filteredAnecdotes = anecdotes
    .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => b.votes - a.votes);

  const handleClick = async(id)=>{
    dispatch(updateAnecdote(id))
    let anecdote =anecdotes.find(anec => anec.id === id)
    const message = `the anecdote "${anecdote.content}" was voted up`
    dispatch(setNotification(message, 5))

  }

  const handleClickDelete=(id)=>{
    
    dispatch(deleteAnecdotes(id))
    let anecdote =anecdotes.find(anec => anec.id === id)
    const message = `the anecdote "${anecdote.content}" was deleted`
    dispatch(setNotification(message,3))
    

  }

 
   return(
    <>
      {filteredAnecdotes.map(anecdote => 
        <Anecdote anecdote={anecdote} handleClickDelete={()=> handleClickDelete(anecdote.id)} handleClick={()=> handleClick(anecdote.id)}/>
      )}
    </>
   )
   
}

export default Anecdotes