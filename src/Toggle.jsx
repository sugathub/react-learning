import React from "react";
import { useState } from "react";

export const Toggle = () => {
  const [display, setDisplay] = useState(true);
  const hid = () => {
    setDisplay(!display);
  };
  const [name,setName] = useState("delete");

  const changeName =()=>{
    if(name == "delete"){
        setName("View");
    }else{
        setName("delete");
    }
  }

  return (
    <>
      <h1>Informaction</h1>

      {display ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iusto
          culpa ducimus ullam blanditiis odio soluta architecto, laudantium
          nesciunt corporis aperiam delectus porro enim temporibus quisquam sint
          repellat dolor. Asperiores.
        </p>
      ) : null}
      <button onClick={()=>{hid(), changeName()}} >{name}</button>
    </>
  );
};
