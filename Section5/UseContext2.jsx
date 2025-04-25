import React from 'react'
import { useContext } from 'react'
import { namecontext } from './UseContext1'

function UseContext2() {

    const name=useContext(namecontext)
  return (
    <div>
      <h1>Name:{name}</h1>
    </div>
  )
}

export default UseContext2
