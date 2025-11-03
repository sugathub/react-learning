import { Routes, Route, Link, Navigate, } from "react-router"
import { Home } from "./Home"
import About from "./About"
import { Login } from "./Login"
import { NaveBar } from "./NaveBar"



const App = () => {


  return (
    <>
      <NaveBar />
      <div style={{
        display: "flex",
        justifyContent: "center",
        margin: "444px"
      }}> <Routes >

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/*" element={<h1>Page is not found </h1>} /> */}

          <Route path="/*" element={<Navigate  to ="/"/>} />
          


        </Routes></div>





    </>
  )
}

export default App
