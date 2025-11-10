import { Outlet, Route, Routes } from "react-router-dom";
import "./app.css"
import { Linkes } from "./Linkes";
import { UserList } from "./UserList";
import { AddUser } from "./AddUser";
const App = () => {


  return (
    <>

    <Routes >
      <Route element={<Linkes />}  >
        

        <Route path="/" element={<UserList />}/>
        <Route path="/addUser" element={<AddUser />} />
      </Route>
    </Routes>
    

    

    </>
  )
}

export default App;