import React, { useState } from 'react'

export const CheckBoxs = () => {

  const [skills, setSkills] = useState([]);

  const update = (event) => {
    if (event.target.checked) {

      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => { item != event.target.value }));
    }


  }
  return (



    <>

      <h2>Handle checkBoxs</h2>

      <input onChange={update} type='checkBox' value="C++" id='C++' style={{ cursor: "pointer" }} />
      <label htmlFor="C++" style={{ cursor: "pointer" }}>C++</label>
      <br />
      <br />
      <input onChange={update} type='checkBox' value="Java" id='Java' style={{ cursor: "pointer" }} />
      <label htmlFor="Java" style={{ cursor: "pointer" }}>Java</label>

      <br />
      <br />
      <label   onChange={update} style={{ cursor: "pointer" }} >
        <input value="C" type="checkBox" />C

      </label>
      <br /><br />
      <input onChange={update} type='checkBox' value="JavaScripe" id='JavaScripe' style={{ cursor: "pointer" }} />
      <label htmlFor="JavaScripe" style={{ cursor: "pointer" }}>JavaScripe</label>

      <br />
      <h2>{skills}</h2>


    </>
  )
}
