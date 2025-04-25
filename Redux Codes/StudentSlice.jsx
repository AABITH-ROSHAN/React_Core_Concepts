import { createSlice } from "@reduxjs/toolkit";

const initial=[]

const Studentslice=createSlice({
    name:"Student",
    initialState:initial,
    reducers:{
        addStudent(state,action){
            state.push(action.payload)
        },
        deleteStudent(state,action){
            const delIndex=action.payload;
            return state.filter((item,index)=>(index!==delIndex))
        },
        editStudent(state,action){
            const {index,editedName}=action.payload;
            state[index]=editedName;
        }
    }

})

export const {addStudent,deleteStudent,editStudent}=Studentslice.actions;

export default Studentslice.reducer 