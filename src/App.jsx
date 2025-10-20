// import './App.css'

import { useRef, useState } from "react";
import Navebar from "./Navebar";

function App() {

  const ok = useRef();

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  let total = users.length;
  let lastUser =users[users.length-1];
  let unik =[...new Set(users)].length;

  const add = () => {
    setUsers([...users, user]);

  };
  return (
    <>
      <Navebar />

      <br />
      <br />
      <h2>Total User:{total} </h2>
      <h2>Last User: {lastUser} </h2>
      <h2>Unique Total User: {unik} </h2>

      <h2>okok</h2>

      <input ref={ok}
        type="text"
        placeholder="enter name"
        onChange={(event) => {
         
          setUser(event.target.value);
        }}
      />
      <button  onClick={add}>Add</button>

      {users.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </>
  );
}

export default App;
