import { BrowserRouter , Routes,Route,Link,useNavigate} from "react-router-dom"
import React from "react"


function App() {

  return(
    <>
    <BrowserRouter>
    <Link to='/11'> Class 11</Link>
    <Link to='/12'> Class 12</Link>

      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/11" element={<Class11></Class11>}></Route>
        <Route path="/12" element={<Class12></Class12>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

function Errrorpage(){
  return <div>
    CHALA JA YAHA SE 
  </div>
}

function LandingPage(){
  return <div>
    Welcome to landing Page
    </div>
  
}

function Class11(){
  return(
    <div>
      Welcome to Orchid. ae bihari
    </div>
  )
}

function Class12(){
  const navigate=useNavigate()
  function Redirect(){
    navigate("/")

}

  return(
    <div>
      Welcome to Orchid class 12th . ae bihari
      <button onClick={Redirect}>Redirect to landing page</button>
    </div>
  )
}



export default App
