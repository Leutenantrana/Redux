import { useDispatch, useSelector } from 'react-redux'
import { updateNote, selectorFunction } from '../reducer/noteReducer'

const Note =({note, handleClick})=>{
    return(
      
        <li >
           {note.content}
           <button onClick={handleClick}><strong>{note.important? 'important': 'not important'}</strong></button>
        </li>
    )
}

const Notes =()=>{
    
    const dispatch = useDispatch()
    const notes = useSelector(selectorFunction)
    const handleClickImportant =async(id)=>{
       dispatch(updateNote(id))
    }

    return(
        <ul>
            {notes.map(note =>
                <Note
                   key={note.id}
                   note={note}
                   handleClick={()=>handleClickImportant(note.id)}
                />
            )}
        </ul>
    )
}

export default Notes
