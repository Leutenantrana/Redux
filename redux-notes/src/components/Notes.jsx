import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from "../reducer/noteReducer";
const Note =({note, handleClick})=>{
    return(
      
          <li >
            {note.content}
            <button onClick={handleClick}><strong>{note.important? 'important': 'not important'}</strong></button>
          </li>
    )
}

const Notes =()=>{
    const notes = useSelector(state => state)
    const dispatch = useDispatch()

    return(
        <ul>
            {notes.map(note =>
                <Note key={note.id} note={note} handleClick={()=>dispatch(toggleImportanceOf(note.id))} />
            )}
        </ul>
    )
}
export default Notes
