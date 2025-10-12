
// import './App.css'

import { useRef } from "react"
import Navebar from "./Navebar"
import { useState } from "react";
import User from "./User";


function App() {

 const inputRef =useRef(null);
const [number,setNumber]=useState(0);

const operction =()=>{
  
  setNumber(inputRef.current.value)
  


}

 
  return (
    <>



     <Navebar />
     <h1>Input number :{number}</h1>

    <User ref={inputRef} />
     <button onClick={operction}>Enter</button>

   
     




    </>
  )
}

export default App
