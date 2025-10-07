
// import './App.css'

import { Collage } from "./Collage";





function App() {

  const collageData = [
    {
      name: "IIMA",
      Rank: "428",
      student: [
       { name: "sugat"},
       { age: "76"},
      ]

    },
    {
      name: "IIT",
      Rank: "129",
      student: [
        {name: "JAY"},
        {age: "66"},
      ]

    },
    {
      name: "IIMC",
      Rank: "1448",
      student: [
        {name: "JAKE"},
        {age: "34"},
      ]

    },

  ];


  return (
    <>
   {
    collageData.map((collage,index)=> (

<div key={index}>

<Collage collage={collage}/>
</div>
    ))
}



    </>
  )
}

export default App
