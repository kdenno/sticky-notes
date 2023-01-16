import React, {useReducer, useState, useRef} from 'react'
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
    const [notifyUser, setNotifyUser] = useState(false)
    const activeNote = useRef(null)
    const createNote = (newNote) =>  dispatch({type: ActionTypes.CREATE_NOTE, payload: newNote})
    const upadateNote = (note) => dispatch({type: ActionTypes.UPDATE_NOTE, payload: note})
    const dragOver = (event) => {
        event.stopPropagation()
        event.preventDefault()
    }
    const dragEnter = () => {
        setNotifyUser(true)
    }
    const dropped = () => {
        dispatch({type: ActionTypes.DELETE_NOTE, payload: activeNote.current})
        setNotifyUser(false)
    }
    const updateActiveNote = (note) => {
        activeNote.current = note
    }
    const bordercolor = notifyUser ? 'solid 1px red' : 'none'
    return (
        <div className='sticky-canvas'>
            {state.totalNotes.map((note) => <div key={note.id}><StickyNote note={note} createNote={createNote} updateNote={upadateNote} activateNote={updateActiveNote}/></div>)}
        <div className='delete-zone' style={{border: bordercolor}} onDragOver={dragOver} onDragEnter={dragEnter} onDrop={dropped}>Drop note here to delete</div>
        </div>
    )
}

export default StickyNotes
