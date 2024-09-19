import { useState } from "react";
import React  from "react";

const WithclickTracking = (Comp) => {
    
    const [clickCount, setClickCount] = useState(0);

    return (props)=>{
        const handleClick=()=>{
            let temp= clickCount+1
            setClickCount(temp)
            console.log("CROMP : ",props)
            console.log("TEMP : ",clickCount)
        
    };

    return (
    <div>
       <div onClick={handleClick}>
       </div>
        <Comp {...props} click={clickCount}></Comp>

    </div>
    );
    }
};

export default WithclickTracking