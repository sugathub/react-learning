import React, { useState } from 'react'
import Clock from './Clock';

const ColorClock = () => {
     const [colorClock,setColorClock]=useState("white");
    
        const changeColor= (event)=>{
    setColorClock(event.target.value);}
  return (
    
    <>
     <select onChange={changeColor} name="color" id="color">
    <option value="#fc0015ff">read</option>
    <option value="green">green</option>
    <option value="white">white</option>
    <option value="yellow">yellow</option>
  </select>
  <Clock colorClock ={colorClock}/>
  
    </>
  )
}

export default ColorClock