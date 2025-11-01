import React from 'react'
import { Four } from './Four'
import { useContext } from 'react'
import { SubjectContext } from './ContexData'

const Three = () => {

    const subject =useContext(SubjectContext);
  return (
    

    <>
    <div style={{padding:"30px",backgroundColor:"green", margin:"20px"}}>
        <h3>Three</h3>
<p style={{color:"red"}}>the data same: <b>{subject}</b></p>

        <Four />
    </div>
    
    </>
  )
}

export default Three