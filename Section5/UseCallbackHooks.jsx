import React, { useCallback, useEffect, useState } from 'react'
import UseCallbackHooks2 from './UseCallbackHooks2';

function UseCallbackHooks() {
    
    const [name,setname]=useState("Aabith");
    const [dept,setdept]=useState("CSE")
    const HandleName=()=>{
        setname( name=== "Aabith" ? "Roshan" : "Aabith")
    }
    const HandleValue=useCallback(()=>{
        setdept((p)=>p==="CSE" ? "ECE" : "CSE");
    },[])

    useEffect(()=>{
        console.log("Parent Render");
    })


  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Dept:{dept}</h1>
      <button onClick={HandleName}>Change Name</button>
      <UseCallbackHooks2 ondept={HandleValue}/>
    </div>
  )
}
export default UseCallbackHooks;

