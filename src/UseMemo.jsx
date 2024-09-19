import React, { useState , useMemo, useEffect } from 'react'

function UseMemo() {

    const [num,setnum] = useState(0)
    const [dark,setDark]=useState(false)
 
    //  USEING MEMO  :
 
    const doublenumber = useMemo(()=>
        {
            return slowFunction(num);
        },[num])

 
    // USING useEffect  :    

    // const [doublenumber,setDoublenumber] = useState()
    // useEffect(()=>{
    //     setDoublenumber(slowFunction(num))
    // },[num])    

    const themedvalues = {
       backgroundColor:dark?"black":"white",
       color:dark?"white":"black"
    } 

  return (
    <div>
        <div>useMemo</div>
        <div>ENTER A NUMBER : </div>
        <input type='number' value={num} onChange={(event)=>setnum(event.target.value)}></input>
        <div style={themedvalues}>{doublenumber}</div>
        <button onClick={()=>setDark((cur)=>!cur)}>Theme Change</button>
    </div>
  )
}

export default UseMemo

function slowFunction(num){
    console.log("Called")
    for(let i=0;i<100000000;i++){}
    return num * 2;
}