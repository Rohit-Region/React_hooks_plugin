import { useState,useRef, useEffect } from "react"
import UseRef from "./useRef"
import UseMemo from "./useMemo"
import UseCallBack from "./UseCallBack"
import UseContext from "./useContext/UseContext"
import UseReducer from "./useReducer/UseReducer"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Home"
import HocMain from "./hoc/HocMain"
function App() {

  return (

    <BrowserRouter>
      <Routes>
     {/* <UseRef/> */}
      {/* <UseMemo/> */}
      {/* <UseCallBack/> */}
      {/* <UseContext/> */}
 
      {/* <Route path="/" element={<UseRef/>}></Route>  */}
      <Route path="/" element={<Home/>}></Route>
      <Route path="/UseRef" element={<UseRef/>}></Route>
    <Route path="/UserReduce" element={<UseReducer/>}></Route>
    <Route path="/Hoc" element={<HocMain/>}></Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App