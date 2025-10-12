
// import './App.css'

import { useState } from "react"
import Navebar from "./Navebar"
import { Counter } from "./Counter";


function App() {

 
const [counter,setCounter]=useState(0);
const inc =()=>{
  setCounter(counter+10);
};


 
  return (
    <>



     <Navebar />

     <h1>Counter {counter}</h1>
    <Counter inc={inc} />
     




    </>
  )
}

export default App
