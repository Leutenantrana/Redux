import axios from 'axios'
const baseURL = "http://localhost:3011/anecdotes"
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

const updateAnecdote = async ({ id, object }) => {
    console.log(id)
    console.log("object recieved in updateAnecdote", object)
    const URL = `${baseURL}/${id}`;
    const response = await axios.put(URL, object)
    console.log("object after put request", response.data)
    return response.data

}
const deleteAnecdote = async ({ id }) => {
    const URL = `${baseURL}/${id}`;
    const response = await axios.delete(URL)
    return response.data

}

export default { getAll, createAnecdote, updateAnecdote, deleteAnecdote }