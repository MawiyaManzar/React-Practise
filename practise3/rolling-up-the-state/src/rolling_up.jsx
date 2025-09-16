const[isvisible,setIsvisible]= useState(false)

// function handlechange(){
//   setIsvisible(!isvisible)// !isvisible- it means not the current value it flips the value
// }

return(
  <div>
  <button onClick={()=> setIsvisible(!isvisible)}>toggle text</button>
  {isvisible && "Hello how r you ?"}

  </div>
  
)

function App() {
    return (
          <LightBulb/>
    
      )
    }

function LightBulb(){
const [bulbon,Setbulbon]=useState(true)

  return(
    <div>
      <BulbState bulbon={bulbon}/>
      <ToggleBulbState  bulbon={bulbon} Setbulbon={Setbulbon}/>
    </div>
  )
}

function BulbState({bulbon}){
  return (
    <div>
      {bulbon ? "Bulb On" : "Bulb off"}
    </div>
  )
}

function ToggleBulbState({bulbon,Setbulbon}){
  
  function Togglebutton(){
      //Setbulbon(currentState=>!currentState)
      Setbulbon(!bulbon)
    }
  return <div>
  <button onClick={Togglebutton}>TOGGLE</button>
  </div>
}