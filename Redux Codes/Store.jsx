import { configureStore } from "@reduxjs/toolkit"
import StudentSlice from './StudentSlice'

export const store=configureStore({
    devTools:true,
    reducer:{
        student: StudentSlice
    }
})