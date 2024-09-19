import React, { createContext, useState } from 'react'
import Container from './container'
export const Themecontext = createContext()
function UseContext() {
    const [theme,setTheme] = useState("light")


    const themedvalues = {
        backgroundColor:theme==="light"?'white':'Black',
        color:theme==="light"?'black':'white',
    }

    const themeChange = () =>{
        setTheme((cur)=>cur==="light"?"dark":"light")
    }

  return (
    <Themecontext.Provider value={theme}>
    <div>
    <button onClick={themeChange}>Theme Change : </button>
    <h1 style={themedvalues}>UseContext</h1>
    <Container/>
    </div>
    </Themecontext.Provider>
  )
}

export default UseContext