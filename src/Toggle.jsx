import React from 'react'
import { useState } from 'react';

export const Toggle = () => {

    const [display,setDisplay]=useState(true);
const hid =()=>{
    setDisplay(false);
}
const show =()=>{
    setDisplay(true);
}

  return (
    <>

    <button onClick={hid} onDoubleClick={show}>visible</button>

    {
    display?<h1>this is me</h1>:<h1>this is you</h1>
}
    
    </>
  )
}
