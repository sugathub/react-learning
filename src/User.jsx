import React, { useState } from 'react'

export const User = ({student ="okok"}) => {
  const [name,setName]=useState("no name");
 
  return (
    <>
    <button onClick={() => student(name)}>jnjn</button>
    
    </>
  )
}
