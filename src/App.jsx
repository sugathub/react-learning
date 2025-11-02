import { BrowserRouter, Routes, Route, Link } from "react-router"

const App = () => {


  return (
    <>
      <BrowserRouter>

        <Link to="/about">about</Link>
        <Link to="/">empty</Link>
        <Link to="/contact">contact</Link>
        <Link to="/home">home</Link>




        <Routes>

          <Route path="/" element={<h1>empty</h1>} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/contact" element={<h1>contact</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />




        </Routes>

        
      </BrowserRouter>


    </>
  )
}

export default App
