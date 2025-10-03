
import './App.css'
import User from './User'




function App() {

  const student = [
    {
      id: 1,
     name: "sugat",
      age: 66,


    },
    {
      id: 2,
       name: "kaka",
      age: 67,

    },
    {
      id: 3,
      name: "kaku",
      age: 54,

    }
  ]

  return (
    <>

{

student.map((user) =>(
      <div key={user.id}>
        <User name={user} age={user.age} id={user.id} />
      </div>
      ))

}


    </>
  )
}

export default App
