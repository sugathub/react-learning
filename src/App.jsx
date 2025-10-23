// import './App.css'



import { useState } from "react";
import Navebar from "./Navebar";


function App() {

  const [data,setData]=useState({
    name:"sugat",
    age:22,
    as:{
      ok:"sjjs",
    }
  })
  const handalUpdate = (val)=>{
    data.name =val;
   
    setData({...data});

  }


  const handal = (val)=>{
    data.as.ok =val;
   
    
    setData({...data,as:{...data.as,val}});

  }
  return (
    <>
      <Navebar />

     <input type="text" placeholder="Update" onChange={()=>{handalUpdate(event.target.value)}} />

          <input type="text" placeholder="Update" onChange={()=>{handal(event.target.value)}} />


     <br />
     <hr />
     <br />
     <h4>Name: {data.name}</h4>
     <p><b>{data.as.ok}</b></p>


    </>
  );
}

export default App;
