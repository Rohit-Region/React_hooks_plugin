import React, { useReducer, useState } from 'react'


function reducerfn(state,action){
    switch(action.type)
    {
        case "Increment":
            return{count:state.count+1};
        case "Decrement":
            return{count:state.count-1};  
    } 
}

const UseReducer = () => {

    const [num,setNum] = useState(0)
    const [state,dispatch]=useReducer(reducerfn,{count:1})

    const Increment = () =>{
        dispatch({type:"Increment"})
        // setNum((val)=>val+1)
    }

    const Decrement = () =>{
        dispatch({type:"Decrement"})
        // setNum((val)=>val-1)
    }

    return (
    <>    
    <h1>UseReducer</h1>
    <div style={{display:'flex',alignItems:"center"}}>
        <button onClick={Decrement}>-</button>
        <p>{state.count}</p>
        <button onClick={Increment}>+</button>    
    </div>
    </>
  )
}

export default UseReducer