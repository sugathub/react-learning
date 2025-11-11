import { Outlet, Route, Routes } from "react-router-dom";
import "./app.css"
import { Linkes } from "./Linkes";
import { UserList } from "./UserList";
import { AddUser } from "./AddUser";
import { UserEdit } from "./UserEdit";
const App = () => {


  return (
    <>

    <Routes >
      <Route element={<Linkes />}  >
        

        <Route path="/" element={<UserList />}/>
        <Route path="/addUser" element={<AddUser />} />
         <Route path="/edit/:id" element={<UserEdit />} />
      </Route>
       

    </Routes>
    

    

    </>
  )
}

export default App;