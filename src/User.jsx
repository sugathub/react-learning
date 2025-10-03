import React from 'react'

const User = ({name,age,id}) => {
  return (
    <>
    <div style={ {
    backgroundColor: "yellowgreen",
    border: "solid brown",
}}> <h3>name : <span style={{color: 'blue'}}>{name.name}</span></h3>
   
    <h3>Age : <span style={{color: 'blue'}}>{age}</span></h3>
   
    <h3>id : <span style={{color: 'blue'}}>{id}</span></h3>
  
  </div>
   
    

    </>
  )
}

export default User