import React, { useEffect, useState } from 'react'
import "./app.css"
const App = () => {

  const [userData,setUserData] =useState([]);
  useEffect(()=>{
    getData();

  },[]);

 async function getData() {
  const url = "https://dummyjson.com/users";
  const response = await fetch(url);
  const data = await response.json();
  
  setUserData(data.users);
}
  return (
    <>
    {
      userData.map((item)=>(
      <div className='infoma'>
         <ui>
          <li>{item.firstName}</li>
          <li> {item.lastName}</li>
         </ui>
      </div>
      ))
    }
    </>
  )
}

export default App;