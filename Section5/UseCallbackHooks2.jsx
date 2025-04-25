import React, { memo, useEffect } from 'react'

function UseCallbackHooks2({ondept}) {

    useEffect(()=>{
            console.log("Child Render");
        })

    
  return (
    <div>
      <button onClick={ondept}>change Dept</button>
    </div>
  )
}

export default memo(UseCallbackHooks2)
