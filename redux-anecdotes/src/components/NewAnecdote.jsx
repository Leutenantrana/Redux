import { useState } from "react";
import { newAnecdotes } from "../reducers/anecdoteReducer";
import { set , clear } from "../reducers/notificationReducer";
import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const NewAnecdote = ()=>{
    const dispatch = useDispatch()
    const addAnecdote =async(event)=>{
        event.preventDefault()
        const content = event.target.anecdote.value;
        event.target.anecdote.value= ''
        const message = `A new anecdote ${content} has been added`
        dispatch(newAnecdotes(content))
        dispatch(setNotification(message, 5)) 
    }

    return(
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">add</button>
        </form>
    )
}

export default NewAnecdote