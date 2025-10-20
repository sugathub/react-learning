import React from 'react'

export const Usera = ({setData}) => {
  return (
    <>
    <h2>Enter Name</h2>
    <input type="text" onChange={(event)=>{setData(event.target.value)}} placeholder="Enter name" />
    
    </>
  )
}
