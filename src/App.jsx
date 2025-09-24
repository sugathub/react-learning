
import './App.css'

import { Hidd } from './Hidd'
import { User } from './User'



function App() {


  let student ={
    name:"sugat",
    age:21,
  }

  return (
    <>
     <User student={student}/>

      <Hidd />





      {/* <Counter /> */}

    </>
  )
}

export default App
