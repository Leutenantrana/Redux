import { vote, deleteAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { set, clear } from "../reducers/notificationReducer"
import anecdoteService from '../services/anecdotes'
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
   const [intervalId, setIntervalId] = useState(null)
   const dispatch = useDispatch()
   const filter = useSelector(state=>state.filter)
   console.log(filter)
   let anecdotes = useSelector(state => state.anecdotes)
   console.log(anecdotes)
   anecdotes = [...anecdotes].sort((a,b)=> b.votes -a.votes);
   console.log(anecdotes)
   const filteredAnecdotes = anecdotes
    .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => b.votes - a.votes);

  const handleClick = async(id)=>{
    const anecdote = anecdotes.find(anec => anec.id ===id)
    console.log("anecdote in handleClick ", anecdote)
    // votedUp anecdote
    const newanecdote ={
        ...anecdote,
        votes: anecdote.votes + 1,
    }
    console.log("newanec",newanecdote)
    //backend change
    const changedAnec = await anecdoteService.updateAnecdote({id,newanecdote})
    console.log("123",changedAnec)
    //state change
    dispatch(vote(changedAnec))
    // clearing notification message if any exists
    if(intervalId){
        clearInterval(intervalId)
    }
    const message = `the anecdote "${anecdote.content}" was voted up`
    // notification state change
    dispatch(set(message))

    const newIntervalId = setInterval(()=>{
        dispatch(clear())
    },5000)
    setIntervalId(newIntervalId)

  }

  const handleClickDelete=(id)=>{
    console.log('delete')
    anecdoteService.deleteAnecdote({id})
    dispatch(deleteAnecdote({id}))

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