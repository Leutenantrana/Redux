import { createSlice } from "@reduxjs/toolkit";
let timeoutId;
const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        set(state, action) {
            return action.payload
        },
        clear(state, action) {
            return null
        }
    }
})

export const { set, clear } = notificationSlice.actions

export const setNotification = (message, time) => {
    console.log(time)
    const timer = time * 1000;
    return async dispatch => {
        if (timeoutId) {
            clearTimeout(timeoutId); // Clear the previous timeout if it exists
        }
        dispatch(set(message))
        timeoutId = setTimeout(() => {
            dispatch(clear())
        }, timer)
    }
}
export default notificationSlice.reducer