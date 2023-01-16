import React, {useEffect, useRef, useId} from 'react'
import './sticky-note.css'

const StickyNote = ({note, createNote, updateNote, activateNote}) => {
    const id = useId()
    const addNote = () => {
        const newNote = {
            id,
            positionX: 0,
            positionY: 0,
            text: ''
        }
        createNote(newNote)
    }
    const dropNote = (event) => {
        const positionX = event.pageX;
        const positionY = event.pageY;
        event.target.style.left = `${positionX}px`
        event.target.style.top = `${positionY}px`
        updateNote({...note, positionX, positionY})
    }

    const setNoteInput = (inputText) => {
        updateNote && updateNote({...note, text: inputText})
    }
    const setActiveNote = () => {
        activateNote && activateNote(note)
    }
    const textAreaRef = useRef(null)
    useEffect(() => {
        textAreaRef.current?.focus() 
    }, []);
    return (
        <div className='sticky-note' draggable="true" onDragEnd={dropNote} onMouseDown={setActiveNote}>
            <div className='sticky-header'>
                <div className='add-note' onClick={() => addNote()}></div>
            </div>
            <textarea placeholder='Add note...' value={note.text} ref={textAreaRef} onChange={e => setNoteInput(e.target.value)}></textarea>
        </div>
    )
}

export default StickyNote
