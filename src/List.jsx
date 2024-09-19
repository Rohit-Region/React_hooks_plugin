import React, { useEffect, useState } from 'react'

function List({getItem}) {
    const [num,setnum]=useState([])
    useEffect(()=>{
        console.log("Setting Item")
        setnum(getItem);
    },[getItem])

  return (
    <div>
        <div>
            {num.map((val,i)=>{
              return <p key={i}>{val}</p>                
           })}           
       </div>
    </div>
  )
}

export default List