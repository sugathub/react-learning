import React, { useState } from 'react'

const Counter = () => {

    const [counter,setCounter]= useState(0);

    const add=()=>{
        setCounter(counter+1);
    }
    const sub=()=>{
        return setCounter(counter-1);
    }




    const [name, setName] =useState("");
    const nameChange=(event)=>{
         setName(event.target.value);
    }



  return (
    <><h1>{counter}</h1>
    <button onClick={add}>+</button><button onClick={sub}>-</button>

    <h1>{name}</h1>
    <input type="text" value={name}   onChange={nameChange} placeholder='Enter Name' />
    
    </>
  )
}

export default Counter