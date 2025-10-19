
// import './App.css'

import Navebar from "./Navebar"
import {useFormStatus} from "react-dom"

function App() {

  const handleSubmit = async () => {
   await new Promise(res => setTimeout(res, 2000));
    console.log("submit");
  }


  function CustomeForm() {
const {pending} = useFormStatus();


    return (
      <div >
        <input disabled={pending} type="text" placeholder="Enter ID" />
        <br />
        <br />
        <input disabled={pending} type="passWord" placeholder="Enter password" />
        <br />
        <br />
        <button disabled={pending} >{pending?"submiting....":"Submit"}</button>

      </div>
    )
  }


  return (
    <>


      <Navebar />

      <h1>UseFormStatus hooks </h1>
      <form action={handleSubmit}>
        <CustomeForm />

      </form>


    </>
  )
}

export default App
