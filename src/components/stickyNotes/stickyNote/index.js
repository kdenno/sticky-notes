import React, {useEffect, useRef, useId, useState} from 'react'
import './sticky-note.css'

const StickyNote = ({note, createNote, updateNote, updateNoteTracker}) => {
    const id = useId()

    const addNote = () => {
        const newNote = {
            id,
            positionX: Math.random() * 60,
            positionY: Math.random() * 30,
            text: ''
        }
        createNote(newNote)
    }
    const noteRef = useRef()
    const [allowMove, setAllowMove] = useState(false)

    const dropNote = (event) => {
        /* get the current position of the note update the state and position of the note. This will later be used to plot the notes in the right positions after fetching from local storage */
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
        updateNoteTracker && updateNoteTracker(note)
    }

    const resizeNote = (ev) => {
        if(allowMove){
            noteRef.current.style.width = ev.pageX - noteRef.current.getBoundingClientRect().left + 'px';
        }
        if (ev.defaultPrevented) return
        ev.preventDefault()

    }
    const handleMouseDown = (ev) => {
        setAllowMove(true)
        if (ev.defaultPrevented) return
        ev.preventDefault()
    }
    const handleMouseUp = (ev) => {
        setAllowMove(false)
        if (ev.defaultPrevented) return
        ev.preventDefault()

    }

    const textAreaRef = useRef(null)
    useEffect(() => {
        textAreaRef.current?.focus() 
    }, []);

    return (
        <div className='sticky-note' draggable="true" onDragEnd={dropNote} onMouseDown={setActiveNote} style={{top: `${note.positionY}px`, left: `${note.positionX}px`}} ref={noteRef}>
            <div className='sticky-header'>
                <div className='add-note' onClick={() => addNote()}></div>
            </div>
            <textarea placeholder='Write note...' value={note.text} ref={textAreaRef} onChange={e => setNoteInput(e.target.value)}></textarea>
            <div className='resizer-wrapper'>
                <div className='resizer' onMouseMove={(ev) => resizeNote(ev)} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}></div>
                
            </div>
        </div>
    )
}

export default StickyNote
