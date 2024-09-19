import React from 'react'
import Buttons from "./Buttons.jsx"
import WithclickTracking from "./WithclickTracking.jsx"

const HocMain = () => {


    const handleClickCountUpdate = (newCount) => {
        console.log("Updated click count in HocMain: ", newCount);
      };

    const HocButton = WithclickTracking(Buttons)
    return (
    <div>
        <h1>HIGHER ORDER COMPONENT : </h1>
        <HocButton label="odu" tracking={{name:'rohit',age:22}}  
        click={handleClickCountUpdate}></HocButton>
        <Buttons label={"tricky"}></Buttons>
    </div>
  )
}

export default HocMain