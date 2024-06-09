import {configureStore} from '@reduxjs/toolkit'
import noteReducer from './NoteSlice.jsx'

export const store = configureStore({
    reducer:{
        notePageReducer : noteReducer
    }
})

