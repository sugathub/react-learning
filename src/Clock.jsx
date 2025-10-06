import { useEffect, useState } from "react"


const Clock = ( {colorClock}) => {
const [time,setTime]=useState();
useEffect(()=>{

  setInterval(()=>{
    setTime(new Date().toLocaleTimeString());
  } ,1000)
},[])
    
      return (
   <>
   
   
   <br />
  
  
<div style={{    height:" 36px",
    backgroundColor: "black",
    color: colorClock,
    width: "190px",
    textAlign: "center",}}>
<h1>{time}</h1>


  </div>
   </>
  )
}

export default Clock