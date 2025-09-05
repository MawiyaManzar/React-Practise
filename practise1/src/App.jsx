import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      
      <div style={{backgroundColor:'#dfe6e9',height:'100vh'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <div>
            <div><PostComponent
            name={"WakeelSahab"}
            subtitle={"1M "}
            time={"2m Ago"}
            image={"/symbol.png"}
            description={"We are Building a product To revolutionize India Legal Industry. We believe in making Life easier for lawyer. Want to try our product?"}

            /></div>
            
          </div>   
        </div>  
      </div>
  )
}

const style={width:200,backgroundColor:"white",borderRadius:10,borderColor:"gray",padding:10}

function PostComponent({name,subtitle,description,time,image}){
  return <div style={style}>  {/*This is father div*/}
    <div style={{display:'flex'}} >{/* this is first child */}
      <img src={image}
      style={{width:30, height:30,borderRadius:20}} 
      />{/* image div first child*/}
     <div style={{marginLeft:10,fontSize:10}}>{/*this is grandson has accountName,followerCount,TimeUploaded */}
      <b>{name}</b>
      <div>{subtitle} follower</div>
        <div>{time}</div>

      
     </div>
    </div>
   
    <div style={{fontSize:12}}>{/* this is second child */}
      {description}
    </div>
  </div>
  
}

export default App
