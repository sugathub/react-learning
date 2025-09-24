
import './App.css'

import { Hidd } from './Hidd'
import { User } from './User'



function App() {


 const ok = (name) =>{
  alert(name);
 }

  return (
    <>
     <User student={ok}/>

      <Hidd />





      {/* <Counter /> */}

    </>
  )
}

export default App
