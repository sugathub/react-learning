import React from "react";
import { useState } from "react";

export const Toggle = () => {
  const [display, setDisplay] = useState(true);
  const hid = () => {
    if (display == true) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };
  return (
    <>
      {display ? <h1>this is me</h1> : null}
      <button onClick={hid}>visible</button>
    </>
  );
};
