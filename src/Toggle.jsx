import React from "react";
import { useState } from "react";

export const Toggle = () => {
  const [display, setDisplay] = useState(true);
  const hid = () => {
  
      setDisplay(!display);
   
    }
  
  return (
    <>
      {display ? <h1>this is me</h1> : null}
      <button onClick={hid}>visible</button>
    </>
  );
};
