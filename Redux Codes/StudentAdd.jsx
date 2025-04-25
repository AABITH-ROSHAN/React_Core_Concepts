import React, { useState } from 'react'
import { addStudent } from './StudentSlice';
import { useDispatch } from 'react-redux';

function StudentAdd() {

    const [input,setinput]=useState();
    const dispatch=useDispatch()

    const HandleData=()=>{
        if(input){
          dispatch(addStudent(input))
          setinput("")
        }
    }

  return (
    <div>
      <h1>Redux Student Management System</h1>
      <label for="stuName"></label>
      <input type='text'  
      id='stuName' 
      placeholder='Add Student' 
      value={input}
      onChange={(e)=>setinput(e.target.value)}
      />
      <button onClick={HandleData}>Add</button>
      
    </div>
  )
}

export default StudentAdd
