import React, { useState } from 'react'
import "./App.css"

const App = () => {

  const [name, setName] = useState();
  const [nameErr, setNameErr] = useState();

  const [password, setPassword] = useState();
  const [passwordErr, setPasswordErr] = useState();


  const handleName = (event) => {
    if (event.target.value.length > 5) {
      setNameErr("This is more then 5 charater")

    } else {
      setNameErr();
      setName(event.target.value);
    }
  }

  const handlePassword = (event) => {
    let regex =/^[A-z0-9]+$/i;
    if (regex.test(event.target.value)) {
      setPasswordErr();

    } else {
      setPasswordErr("enter right password");

    }
  }

  return (
    <>
      <h2>Enter Informaction </h2>
      <br />
      <br />
      <input className={nameErr ? 'namesty' : " "} type="text" onChange={handleName} placeholder='Enter Name' />
      <span className='nameText' >{nameErr}</span>
      <br />
      <br />
      <input type="text" className={passwordErr ? 'namesty' : " "} onChange ={handlePassword} placeholder='Enter passwords' />
            <span className='nameText' >{passwordErr}</span>
      <br />
      <br />
      <button disabled={passwordErr || nameErr }>Submit</button>
    </>
  )
}

export default App