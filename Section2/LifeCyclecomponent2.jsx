import React, { useState } from 'react'
import LifecycleComponents from './LifecycleComponents';

function LifeCyclecomponent2() {

    const [name,setname]=useState("Aabith");
    const [mount,setmount]=useState(true)

    const HandleName=()=>{
        setname( name=== "Aabith" ? "Roshan" : "Aabith")
    }


    const clickMount=()=>{
        setmount(!mount)
    }
  return (
    <div>
      <h1>Name:{name}</h1>
      <button onClick={HandleName}>Change Name</button>
      <button onClick={clickMount}>{(mount) ? "unmount" : "mount"}</button>
      {mount && < LifecycleComponents mount={mount} name={name}/>}
    </div>
  )
}

export default LifeCyclecomponent2
