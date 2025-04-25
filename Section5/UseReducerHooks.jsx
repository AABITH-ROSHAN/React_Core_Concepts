import React, { useReducer } from 'react'

function UseReducerHooks() {

    const initialState={
        val:0
    };

    const reducer=(state,action)=>{
        switch(action.type){
            case "Increment" :
                return {val: state.val+1};
            case "Decrement":
                return {val: state.val-1};
            default:
                return {val: state.val}; 
        }
    }

    const[state,dispatch]=useReducer(reducer,initialState);

  return (
    <div>
        <h1>Count:{state.val}</h1>
      <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
    </div>
  )
}

export default UseReducerHooks
