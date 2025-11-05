import { Routes, Route, Link, Navigate, } from "react-router"
import { Home } from "./Home"
import About from "./About"
import { Login } from "./Login"
import { NaveBar } from "./NaveBar"
import { Collage } from "./Collage"
import { Student } from "./collage/Student"
import { Details } from "./collage/Details"
import { Department } from "./collage/Department"



const App = () => {


  return (
    <>
      




      
        <Routes >

          <Route element={<NaveBar />}>
          
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Route>



          <Route path="/collage" element={<Collage />}>

            <Route path="student" element={<Student />} />
            <Route path="details" element={<Details />} />
            <Route path="department" element={<Department />} />



          </Route>


          <Route path="/*" element={<h1>Page is not found </h1>} />



          {/* <Route path="/*" element={<Navigate  to ="/"/>} /> */}



        </Routes>
      





    </>
  )
}

export default App
