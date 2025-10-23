// import './App.css'




import { useState } from "react";
import Navebar from "./Navebar";


function App() {

  const [data,setData]=useState([
    'sugat','jamgade','aditya','samyak'

  ]);


const handal =(e)=>{
  data[data.length-1]=e;
  setData([...data]);
}


  return (
    <>
      <Navebar />

      <input type="text" onChange={(e)=>{handal(e.target.value)}} placeholder="Update last element of array" />

      {
        data.map((item,index)=>( <h3 key="index" >Name :{item}</h3>)
         
        )
      }







    

    </>
  );
}

export default App;
