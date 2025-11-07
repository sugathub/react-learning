import { Routes, Route } from "react-router"
import { Home } from "./Home"
import About from "./About"
import { Login } from "./Login"
import { NaveBar } from "./NaveBar"
import { Collage } from "./Collage"
import { Student } from "./collage/Student"
import { Details } from "./collage/Details"
import { Department } from "./collage/Department"
import { Userlist } from "./Userlist"
import { Userdetals } from "./Userdetals"


const App = () => {
  return (
    <>
    <NaveBar />
    
      <Routes>
        {/* Navbar wrapper */}
     
          <Route path="/" element={<Home />} />
          <Route path="/user/list?" element={<Userlist />} />
 {/* <Route path="/user/list" element={<Userlist />} /> */}

          <Route path="/user/:id/:name?" element={<Userdetals />} />


          {/* Nested routes for /user */}
          <Route path="user">
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />

          </Route>
      
        {/* Nested routes for /collage */}
        <Route path="collage" element={<Collage />}>
          <Route index element={<Student />} /> {/* default render */}
          <Route path="details" element={<Details />} />
          <Route path="department" element={<Department />} />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<h1>Page is not found</h1>} />
        {/* Alternative redirect: <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  )
}

export default App
