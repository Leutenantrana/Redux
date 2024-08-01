import { createSlice } from "@reduxjs/toolkit"


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
export default anecdoteSlice.reducer