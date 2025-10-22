// import './App.css'



import { useState } from "react";
import Navebar from "./Navebar";


function App() {

  const [data,setData]=useState({
    name:"sugat",
    age:22
  })
  const handalUpdate = (val)=>{
    data.name =val;
    console.log(val);
    console.log(data.name);
    setData({...data});

  }

  return (
    <>
      <Navebar />

     <input type="text" placeholder="Update" onChange={()=>{handalUpdate(event.target.value)}} />
     <br />
     <hr />
     <br />
     <h4>Name: {data.name}</h4>
     <p><b>{data.age}</b></p>


    </>
  );
}

export default App;
