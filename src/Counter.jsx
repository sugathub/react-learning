import React, { useState } from 'react'

const Counter = () => {

    const [counter,setCounter]= useState(0);

    const add=()=>{
        setCounter(counter+1);
    }
    const sub=()=>{
        return setCounter(counter-1);
    }
  return (
    <><h1>{counter}</h1>
    <button onClick={add}>+</button><button onClick={sub}>-</button>
    
    </>
  )
}

export default Counter