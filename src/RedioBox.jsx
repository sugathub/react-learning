import React, { useState } from 'react'

const RedioBox = () => {

 const [gender,setGender]=useState("Male");
 const update= (event)=>{
    setGender(event.target.value);

 }


  return (
   

   <>
<h2>Select Gender</h2>
<input onClick={update} type="radio" name="Gender" id="male"  value="Male"  checked={gender == "Male"}/>
<label htmlFor="male">Male</label>

<input onClick={update} type="radio" name="Gender" id="female" value="Female"  checked={gender == "Female"} />
<label htmlFor="female">Female</label>
   <br /><br />
   <h2>{gender}</h2>
   </>
  )
}

export default RedioBox