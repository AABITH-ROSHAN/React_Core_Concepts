import React, { useMemo, useState } from 'react'

function useMemoHooks() {
    const [name,setname]=useState("Aabith");
    const [count,setcount]=useState(0)

    const HandleName=()=>{
        setname( name=== "Aabith" ? "Roshan" : "Aabith")
    }


    const clickcount=()=>{
        
        setcount(c=>c+1)
    }
    const even=useMemo(()=>{
            let i=0;
            while(i<1000000000){
                i++;
            }
            if(count%2===0){
                return "Even";
            }else{
                return "Odd"
            } 
    },[count])
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Count:{count}--{even}</h1>
      {/* when only used a function */}
      <button onClick={HandleName}>Change Name</button>
      <button onClick={clickcount}>Increment</button>
    </div>
  )
}

export default useMemoHooks

