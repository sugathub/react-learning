
import './App.css'

import { Hidd } from './Hidd'
import { User } from './User'



function App() {


 const ok = (name) =>{
  alert(name);
 }

  return (
    <>
     <User student={ok} style={{color:"blue"}}><h1>okook</h1></User>

      <Hidd />





      {/* <Counter /> */}

    </>
  )
}

export default App
