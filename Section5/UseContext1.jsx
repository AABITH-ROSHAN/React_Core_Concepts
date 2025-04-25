import React, { useState } from 'react'
import { createContext } from 'react';
import UseContext2 from './UseContext2';

export  const namecontext=createContext();

function UseContext1() {

    

    const [name,setname]=useState("Aabith");
    
    const HandleName=()=>{
        setname( name=== "Aabith" ? "Roshan" : "Aabith")
    }
  return (
    <div>
        <button onClick={HandleName}>change Name</button>
      <namecontext.Provider value={name}>
        <UseContext2 />
      </namecontext.Provider>
    </div>
  )
}

export default UseContext1;

