// import './App.css'




import { useActionState } from "react";
import Navebar from "./Navebar";


function App() {

  const handleSubmit = async (PreciousData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');

    await new Promise(res => setTimeout(res, 2000));

    if (name && password) {
      return { message: 'Data Submitted' ,name,password}
    } else {
      return { error: 'Failed to Submit. Enter proper Data' ,name,password }
    }
  }

  const [data, action, pending] = useActionState(handleSubmit, undefined);


  return (
    <>
      <Navebar />


      <h1>useAction State</h1>

      <form action={action}>
        <input type="text" name="name" id="" placeholder="Enter name" />
        <br />
        <br />
        <input type="password" name="password" id="" placeholder="Enetr password" />
        <br />
        <br />
        <button disabled={pending}>Submit</button>
      </form>
      <br />
      <br />

      {
        data?.error && <span style={{ color: 'red' }}>{data?.error}</span>

      }
      {
        data?.message && <span style={{ color: "green" }}>{data?.message}</span>
      }
      <br />
      <hr />
      <h3>name :{data?.name}</h3>
      <br />
      <h3>password :{data?.password}</h3>







    </>
  );
}

export default App;
