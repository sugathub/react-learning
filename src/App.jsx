// import './App.css'


import { useState } from "react";
import Navebar from "./Navebar";
import { Usera } from "./Usera";
import { Usera2 } from "./Usera2";

function App() {

  const [data, setData] = useState(" ");

  return (
    <>
      <Navebar />

      <Usera setData={setData} />
      <br />
      <hr />
      <br />
      <Usera2 data={data} />



    </>
  );
}

export default App;
