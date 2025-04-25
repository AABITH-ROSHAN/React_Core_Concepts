import React, { useRef, useState } from 'react'

function UserefHooks() {

    const ref=useRef(0)

    const [name,setname]=useState("Aabith");
    

    const HandleName=()=>{
        setname( name=== "Aabith" ? "Roshan" : "Aabith")
    }


    const clickcount=()=>{
        ref.current=ref.current+1;
    }
  return (
    <div>
      <h1>Name:{name}</h1>
      <p>Count:{ref.current}</p>
      <button onClick={HandleName}>Change Name</button>
      <button onClick={clickcount}>Increment</button>
    </div>
  )
}

export default UserefHooks;
