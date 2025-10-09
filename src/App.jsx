
// import './App.css'









function App() {

  const cardStyle={ border: "2px solid red",
    width: "196px",
    boxShadow: "1px 1px 1px 1px #34cecf",
    height: "322px",

  }


  return (
    <>
   
<h1>inline css</h1>


<div style={cardStyle}>


  <img src="https://www.bing.com/th/id/OIP.YBwCYCzeUKyYHPLdP3He2AHaDt?w=174&h=211&c=8&rs=1&qlt=90&o=6&cb=12&dpr=1.3&pid=3.1&rm=2" alt="girl" />
  <h4>Neha</h4>
  <p>software</p>
</div>

    </>
  )
}

export default App
