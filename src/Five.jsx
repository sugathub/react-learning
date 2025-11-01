import React, { useContext } from 'react'
import { SubjectContext } from './ContexData'

export const Five = () => {

    const subject =useContext(SubjectContext)
  return (
    <div style={{padding:"30px",backgroundColor:"pink",color:"black" , margin:"20px"}}>
        <h3>Five</h3>
        <p>Subject is  : {subject}</p>
    </div>
  )
}
