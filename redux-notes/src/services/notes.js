import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
    const notes = await axios.get(baseUrl)
    console.log("Get all is called and the returned data is : ", notes.data)
    return notes.data
}
const createNote = async (content) => {
    const object = {
        content,
        important: false
    }
    const response = await axios.post(baseUrl, object)
    console.log('we are inside noteServices after axios post request', response.data)
    return response.data
}
const updateNote = async ({ id, object }) => {
    const url = `${baseUrl}/${id}`;
    const response = await axios.put(url, object)
    return response.data
}
export default { getAll, createNote, updateNote }