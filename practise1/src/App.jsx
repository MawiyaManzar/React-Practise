import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      
      <div style={{backgroundColor:'#dfe6e9',height:'100vh'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <PostComponent/>
          </div>  
      </div>
  )
}

const style={width:200,backgroundColor:"white",borderRadius:10,borderColor:"gray",padding:10}

function PostComponent(){
  return <div style={style}>  {/*This is father div*/}
    <div style={{display:'flex'}} >{/* this is first child */}
      <img src={'https://thf.bing.com/th/id/OSK.HEROB0d_ufZnWVweEGXnWvgK-NqrQp16Gd-V6vBZE9Yr91k?o=7&cb=thfc1rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'}
      style={{width:30, height:30,borderRadius:20}} 
      />{/* image div first child*/}
     <div style={{marginLeft:10,fontSize:10}}>{/*this is grandson has accountName,followerCount,TimeUploaded */}
      <b>100xDevs</b>
      <div>23000followers</div>
        <div>12m</div>

      
     </div>
    </div>
   
    <div style={{fontSize:12}}>{/* this is second child */}
      this is caption of the post 
    </div>
  </div>
  
}

export default App
