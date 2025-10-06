import { useEffect, useState } from "react"


const Clock = ( {colorClock}) => {
const [time,setTime]=useState();
useEffect(()=>{

  setInterval(()=>{
    setTime(new Date().toLocaleTimeString());
  }
  ,1000)
},[])
    
      return (
   <>
   
   
   <br />
  
  

  <div style={{    height:" 36px",
    backgroundColor: "black",
    color: "{green}",
    width: "100px",
    textAlign: "center",}}>

{time}

  </div>
   
   </>
  )
}

export default Clock