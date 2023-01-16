import { MOCK_NOTESTATE } from '../../components/stickyNotes/shared/mockData.js'
import { notesReducer } from './index.js';
import { ActionTypes } from '../../components/stickyNotes/shared/constants.js';


 
describe('Reducers logic', () => {
    
    describe('Create Note', () => {
        const newNote = {
            id: 100,
            positionX: 0,
            positionY: 0,
            text: ''
        }
        const action = {type: ActionTypes.CREATE_NOTE, payload: newNote}
        const currentState = notesReducer(MOCK_NOTESTATE, action)
        it('it should add a new note to the array of notes ', () => {
            expect(currentState.totalNotes.length).toHaveLength(4)
            expect(currentState.totalNotes[3].id).toEqual(100)

        })

    })
    describe('Update Note', () => {
        const newNote = {
            id: 100,
            positionX: 0,
            positionY: 0,
            text: 'test4'
        }
        const action = {type: ActionTypes.UPDATE_NOTE, payload: newNote}
        const currentState = notesReducer(MOCK_NOTESTATE, action)
        it('it should update the note in the notes array ', () => {
            expect(currentState.totalNotes[3].text).toEqual('test4')

        })

    })
    describe('Detele Note', () => {
        const newNote = {
            id: 1,
            positionX: 0,
            positionY: 0,
            text: ''
        }
        const action = {type: ActionTypes.DELETE_NOTE, payload: newNote}
        const currentState = notesReducer(MOCK_NOTESTATE, action)
        it('it should remove a note from the array of notes ', () => {
            expect(currentState.totalNotes[0].id).toEqual(20)

        })

    })
    

})