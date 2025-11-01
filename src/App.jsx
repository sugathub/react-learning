import React, { useState } from 'react'
import Body from './Body'
import { SubjectContext } from './ContexData'

const App = () => {


  const [data,setData]= useState("NO");
  return (<>
    <div style={{ padding: "30px", backgroundColor: "blue", margin: "20px" }}>


      <SubjectContext.Provider value={data}>
        <h3>App</h3>
        <Body />

        <select name="" id="" onChange={(event)=>{setData(event.target.value)}}>

          <option value=" ">Select no</option>
          <option value="Maths ">Maths</option>

          <option value=" English">English</option>
          <option value="Hindi">Hindi</option>
          <option value=" Marthi">Marthi</option>


        </select>


      </SubjectContext.Provider>


    </div>
  </>
  )
}

export default App
