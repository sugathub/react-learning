import React from "react";
import { useState } from "react";

export const Toggle = () => {




  const [display, setDisplay] = useState(0);


  const next = () => {
    if (display < 5) {
      setDisplay(display + 1);
    }
  }
  const pre = () => {
    if (display > 0) {
      setDisplay(display - 1);
    }
  }


  return (
    <>
      <h1>Informaction</h1>

      {display ==0?<p>count 0</p>
:display ==1?<p>ok</p>  
:display ==2?<p>jio</p>   
:display ==3?<p>idea</p> 
:display ==4?<p>atell</p> :null


}
      <button onClick={next} >Next</button>
      <button onClick={pre}>pre</button>
    </>
  );
};
