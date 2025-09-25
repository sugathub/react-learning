import React, { useState } from 'react'

export const Live = () => {

    const [name,setName] =useState();
const chan = (value)=>{
setName(event.target.value)
}

  return (

    
    <>
    <h2>Enter Text</h2>

    <form action="submit">
        <h3>{name}</h3>

      <input type="text" placeholder='Eneter Text' value={name}  onChange={chan}/>

    </form>
    
    </>
  )
}
