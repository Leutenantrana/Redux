import axios from 'axios'
const baseURL = "http://localhost:3001/anecdotes"
const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const createAnecdote = async (content) => {
    const object = {
        content,
        votes: 0,
    }
    const response = await axios.post(baseURL, object)
    return response.data
}

const updateAnecdote = async ({ id, newanecdote }) => {
    console.log(id)
    console.log("object recieved in updateAnecdote", newanecdote)
    const URL = `${baseURL}/${id}`;
    const response = await axios.put(URL, newanecdote)
    console.log("object after put request", response.data)
    return response.data

}
const deleteAnecdote = async ({ id }) => {
    console.log(id)
    const URL = `${baseURL}/${id}`;
    const response = await axios.delete(URL)
    return response.data

}

export default { getAll, createAnecdote, updateAnecdote, deleteAnecdote }