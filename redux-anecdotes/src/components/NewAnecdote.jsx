import { useState } from "react";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { set , clear } from "../reducers/notificationReducer";
import { useDispatch } from "react-redux";
import anecdoteServices from '../services/anecdotes'
const NewAnecdote = ()=>{
    const dispatch = useDispatch()
    const [intervalId, setIntervalId] = useState(null);
    

    const addAnecdote =async(event)=>{
      
        event.preventDefault()
        if (intervalId) {
            clearInterval(intervalId);
        }
        const content = event.target.anecdote.value;
        console.log(content)
        event.target.anecdote.value= ''
        const message = `A new anecdote ${content} has been added`
        const newanecdote = await anecdoteServices.createAnecdote(content)
        dispatch(createAnecdote(newanecdote))
        dispatch(set(message))
        const newIntervalId = setTimeout(() => {
            dispatch(clear());
        }, 5000);

        setIntervalId(newIntervalId);
        
    }
    return(
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">add</button>
        </form>
    )
}

export default NewAnecdote