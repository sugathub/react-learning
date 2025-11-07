import React, { useEffect, useState } from 'react'
import "./app.css"
const App = () => {

  const [loding,setLoding]=useState(false);

  const [userData,setUserData] =useState([]);
  useEffect(()=>{
    getData();

  },[]);

 async function getData() {
  setLoding(true);

  const url = "http://localhost:3000/posts";
  const response = await fetch(url);
  const data = await response.json();
  setLoding(false);
  
  setUserData(data);
}
  return (
    <>
    <h1>Data is comeing</h1>
    {
      !loding?
      userData.map((item)=>(
      <div className='infoma'>
         <ui id={item.id}>
          <li>this is the <b style={{color:'blue'}}>{item.title}</b></li>
          <li>this is a <b style={{color:'red'}}>{item.views}</b> </li>
         </ui>
      </div>
      )):<h2>Loding...</h2>
    }
    </>
  )
}

export default App;