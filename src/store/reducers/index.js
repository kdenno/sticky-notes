function notesReducer(state, action) {
    switch(action.type){
        case 'CREATE_NOTE':
            return {...state, totalNotes: [...state.totalNotes, action.payload]}
        case 'UPDATE_NOTE':
            const newTotalNotes = [...state.totalNotes]
            const noteIndex = newTotalNotes.findIndex((note) => note.id ===action.payload.id)
            newTotalNotes[noteIndex] = {...action.payload}
            return {...state, totalNotes: newTotalNotes}
        case 'DELETE_NOTE':
            const newNotes = [...state.totalNotes].filter(note => note.id !== action.payload.id)
            return {...state, totalNotes: newNotes}

    }
}
export {notesReducer}