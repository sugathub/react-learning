import React, { useState } from 'react'
import Clock from './Clock';

const ColorClock = () => {
     const [colorClock,setColorClock]=useState("balck");
    
        const changeColor= (event)=>{
    setColorClock(event.target.value);}
  return (
    
    <>
     <select onChange={changeColor} name="color" id="color">
    <option value="read">read</option>
    <option value="green">green</option>
    <option value="black">black</option>
    <option value="yellow">yellow</option>
  </select>
  <Clock colorClock ={colorClock}/>
    
    </>
  )
}

export default ColorClock