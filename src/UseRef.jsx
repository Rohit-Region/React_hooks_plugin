import { useState,useRef, useEffect } from "react"

function UseRef() {
    const inputref= useRef()
    const [input,setInput] = useState()
    console.log("Rendering");
    
    useEffect(()=>{
      inputref.current=input
    }, [input])
  
    function display(){
        console.log("Vale",inputref.current);
        console.log("Vale",inputref.current.value);
        setInput(inputref.current.value)
    }
  
    return (
      <div>
        <div>Enter a Input value  : </div>
        <input
        // ref={inputref}
        type="text" 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        ></input>
        <button onClick={display}>Display</button>
        <div>{input}</div>
        <div>my Name is {inputref.current}</div>
      </div>
    )
  }

export default UseRef