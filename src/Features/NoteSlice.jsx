import {createSlice} from '@reduxjs/toolkit'


const notes = localStorage.getItem('note');
const initialState = notes ? JSON.parse(notes) : [];

const NoteSlice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers : {
        addNotes:(state,action)=>{           
            state.push(action.payload)
            localStorage.setItem('note' ,JSON.stringify(state))
        },
        deleteNotes:(state,action)=>{           
            const id = action.payload

            const notes = JSON.parse(localStorage.getItem('note'))
            const filteredNotes = notes.filter(item=>item.id !== id)
            localStorage.setItem('note' ,JSON.stringify(filteredNotes))

        },
        editNotes:(state,action)=>{
            const {id,title,content} = action.payload
            console.log(id,title,content);
            const index = state.findIndex(note => note.id === id)
            state[index] = {...state[index],title,content}
            console.log(state);
            localStorage.setItem('note' ,JSON.stringify(state))


        }        
    }
})

export const { addNotes,deleteNotes,editNotes} = NoteSlice.actions

export default NoteSlice.reducer