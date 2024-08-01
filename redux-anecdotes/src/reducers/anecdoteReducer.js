import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      console.log("ACTION inside vote :", action)
      const anecdoteChanged = action.payload
      const id = anecdoteChanged.id
      return state.map(anec => anec.id !== id ? anec : anecdoteChanged)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    deleteAnecdote(state, action) {
      const id = action.payload.id
      return state.filter(anec => anec.id !== id)
    }
  }
})

export const { createAnecdote, vote, setAnecdotes, deleteAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const newAnecdotes = (content) => {
  return async (dispatch) => {
    const newanecdote = await anecdoteService.createAnecdote(content)
    dispatch(createAnecdote(newanecdote))
  }
}
export const updateAnecdote = (id) => {
  return async (dispatch, getState) => {
    const anecdotes = getState().anecdotes;
    const anecdoteToVote = anecdotes.find(anec => anec.id === id)
    const votedUpAnecdote = {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1
    }
    const changedAnecdote = await anecdoteService.updateAnecdote({ id, object: votedUpAnecdote })
    dispatch(vote(changedAnecdote))
  }
}
export const deleteAnecdotes = (id) => {
  const theId = id
  return async (dispatch) => {
    const returnedobj = await anecdoteService.deleteAnecdote({ id })
    console.log(returnedobj)
    dispatch(deleteAnecdote({ id }))
  }
}

export default anecdoteSlice.reducer