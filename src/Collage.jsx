import React from 'react'

export const Collage = ({ collage }) => {
  return (
    <>

      <div style={{
        border: "4px solid orange",
        backgroundColor: " black",
        color: "white",
        padding: " 30px",
        margin: " 40px",
        alignContent: " center",
        borderRadius: " 30px"
      }}>





        <h2>Collage Name : {collage.name}</h2>
        <ul>
          <li>Rancking : {collage.Rank}</li> </ul>
          <h3>Student</h3>
<ul><li >Name :{collage.student.name} - age{collage.student.age} </li></ul>
            
          
       
      </div>

    </>
  )
}
