import { createSlice } from '@reduxjs/toolkit'
import noteService from '../services/notes'

const generateId = () =>
    Number((Math.random() * 1000000).toFixed(0))

const noteSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {
        createNote(state, action) {
            state.push(action.payload)

        },
        toggleImportanceOf(state, action) {
            const changedNote = action.payload
            const id = changedNote.id
            return state.map(note =>
                note.id !== id ? note : changedNote
            )
        },
        appendNote(state, action) {
            state.push(action.payload)
        },
        setNotes(state, action) {
            return action.payload
        }
    }
})
export const { createNote, toggleImportanceOf, appendNote, setNotes } = noteSlice.actions

export const initializeNotes = () => {
    return async dispatch => {
        const notes = await noteService.getAll()
        dispatch(setNotes(notes))
    }
}
export const createNotes = (content) => {
    return async dispatch => {
        const newNote = await noteService.createNote(content)
        dispatch(createNote(newNote))

    }

}
export const updateNote = (id) => {
    return async (dispatch, getState) => {
        const notes = getState().notes
        console.log(notes)
        const noteToChange = notes.find(note => note.id === id)
        const changedNote = {
            ...noteToChange,
            important: !noteToChange.important
        }
        const updatedNote = await noteService.updateNote({ id, object: changedNote })
        dispatch(toggleImportanceOf(updatedNote))
    }
}
export const selectorFunction = state => {
    let filteredState;
    if (state.filter === 'ALL') {
        return state.notes
    }
    return state.filter === 'IMPORTANT' ?
        state.notes.filter(note => note.important) :
        state.notes.filter(note => !note.important)
}
export default noteSlice.reducer