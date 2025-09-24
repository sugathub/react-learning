import React, { useState } from 'react'

export const User = ({student ,  children ,style}) => {
  const [name,setName]=useState("no name");
 
  return (
    <>
    <div style={style}>
     {children} 
     </div>
    <button onClick={() => student(name)}>jnjn</button>
    
    </>
  )
}
