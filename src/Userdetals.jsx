import React from 'react'
import { useParams } from 'react-router-dom'

export const Userdetals = () => {

    const paramsData =useParams();
  return (
   <>
   <div  className="text-5xl font-bold text-green-400 drop-shadow-[0_0_10px_#22c55e] text-center mt-12">
   <h1>Userdetals</h1>
   <h2>This id : {paramsData.id}</h2>
      <h2>This name: {paramsData.name}</h2>

</div>
   </>
  )
}
