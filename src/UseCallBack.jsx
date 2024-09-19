import  {useCallback,useState} from "react";
import React from 'react'
import List from "./list";

function UseCallBack() {
    const [dark,setDark]=useState(false);
    const [input,setInput]=useState(1);

    // const getItem = () => {
    //     return [input + 1,input + 2, input + 3]
    // }

    const getItem=useCallback(()=>{
        return [input + 1,input + 2, input + 3]
    },[input])


    const themedvalues = {
        backgroundColor:dark?'white':'black',
        color:dark?'black':'white'
    }

  return (
    <div>
        <div>UseCallBack</div>
        <input type="number" value={input} onChange={((event)=>setInput(parseInt(event.target.value)))}></input>
        <button onClick={()=>setDark((cur)=>!cur)}>THEME CHANGE </button>
        <div style={themedvalues}>WE ARE VENOMS</div>
       <List getItem={getItem()}/>

    </div>
  )
}

export default UseCallBack
