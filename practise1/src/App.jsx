import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {PostComponent} from './Post'

function App() {
  const [count, setCount] = useState(0)

  function addPost(){
    
  }

  return (
      <div style={{backgroundColor:'#dfe6e9',height:'100vh'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <div><ToggleMessage/></div>{/**/}
          <div>
            <div><PostComponent
            name={"WakeelSahab"}
            subtitle={"1M Followers "}
            time={"2m Ago"}
            image={"/symbol.png"}
            description={"We are Building a product To revolutionize India Legal Industry. We believe in making Life easier for lawyer. Want to try our product?"}

            /></div>
            <div>
              <PostComponent
                  name={"Linkedin For Marketing"}
                  subtitle={"Promoted"}
                  image={"/symbol.png"}
                  description={'Want to get Job? Join Linkedin Premium '}              
              />
            </div>
          </div>   
        </div>  
      </div>
      
  )
}

const style={width:200,backgroundColor:"white",borderRadius:10,borderColor:"gray",padding:10}

const ToggleMessage = () => {
  const [isVisible,setIsVisible]= useState(false) // true value in isvisible and and function in setIsVisible
  {/* returns a dependency array [true,fucntion] we r destructuring this arr putting true in setIsVisible */}
  const [notificationCount,setnotificationCount]= useState(0)
  return(
<div>
        <button onClick={()=>setnotificationCount(notificationCount+1) }> 
            ToggleMessage
        </button>
        {notificationCount}
        {isVisible && <p>Arey Kaju kAtlti letechale arey lete. AAAJ unse milna hai Hamein !</p>}
    </div>
)
}

export default App
