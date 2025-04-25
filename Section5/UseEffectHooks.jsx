import React, { useEffect, useState } from 'react'

function UseEffectHooks() {
    const [count,setcount]=useState(0);

    const Increment=()=>{
        setcount(c=>c+1);
    }

    useEffect(()=>{
        console.log("Initial Render");
    },[])
    useEffect(()=>{
        console.log("count Render");
    },[count])
    useEffect(()=>{
        console.log("Every Render");
    })
    
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default UseEffectHooks
