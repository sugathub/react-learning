import React, { useState } from 'react'

export const AddUser = () => {

const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

const [message, setMessage] = useState('');

  const Update = async () => {
    try{
      const URL = "http://localhost:3000/posts";

    const response = await fetch(URL, {
       headers: { 'Content-Type': 'application/json' },
      method: 'Post',
      body: JSON.stringify({number,name,age}),
    });
    await response.json();
    if(response.ok){
      setMessage('✅ User added successfully!');
    }
    else{
      setMessage('❌ Failed to add user');

    }
     setTimeout(() => setMessage('Enter New Data'), 2000);

    }catch(error){
        console.error(error);
      setMessage('⚠️ Something went wrong');
      setTimeout(() => setMessage(''), 2000);

    }
  

    const URL = "http://localhost:3000/posts";

    const response = await fetch(URL, {
      method: 'Post',
      body: JSON.stringify({number,name,age}),
    });
    await response.json();

  }


  return (<>
    <div className='tInput'>

      <input type="number" onChange={(event) => { setNumber(event.target.value) }} placeholder='Enter number' />

      <input type="text" onChange={(event) => { setName(event.target.value) }} placeholder='Enter Name' />

      <input type="number" onChange={(event) => { setAge(event.target.value) }} placeholder='Enter Age' />

      <button onClick={()=>{
        if(name && age && number){
          Update();
        }
      }}>Add User</button>

     


    </div>
    <div className='tInput'> <h3>{message}</h3>
    </div>
    </>
  )
}
