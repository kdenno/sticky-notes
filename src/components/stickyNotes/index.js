import React, {useReducer} from 'react'
import './sticky.css'
import StickyNote from './stickyNote'
import { notesReducer } from '../../store/reducers'
import { ActionTypes } from './shared/constants'
const initialNoteState = {
    totalNotes: [{
        id: 1,
        positionX: 0,
        positionY: 0,
        text: ''
    }], 

}

const StickyNotes = () => {
    const [state, dispatch] = useReducer(notesReducer, initialNoteState)
    const createNote = (newNote) =>  dispatch({type: ActionTypes.CREATE_NOTE, payload: newNote})
    const upadateNote = (note) => dispatch({type: ActionTypes.UPDATE_NOTE, payload: note})
    const dragOver = (event) => {
        event.stopPropagation()
        event.preventDefault()
    }
    console.log('the notes ', state.totalNotes)
    
    return (
        <div onDragOver={dragOver}>
            {state.totalNotes.map((note) => <div key={note.id}><StickyNote note={note} createNote={createNote} updateNote={upadateNote}/></div>)}
        </div>
    )
}

export default StickyNotes
