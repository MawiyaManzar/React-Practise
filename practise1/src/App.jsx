import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import {PostComponent} from './Post'

// function PostComponent({name,subtitle,description,time,image})

// {
//   return <div style={style}>  {/*This is father div*/}
//     <div style={{display:'flex'}} >{/* this is first child */}
//       <img src={image}
//       style={{width:30, height:30,borderRadius:20}} 
//       />{/* image div first child*/}
//      <div style={{marginLeft:10,fontSize:10}}>{/*this is grandson has accountName,followerCount,TimeUploaded */}
//       <b>{name}</b>
//       <div>{subtitle} </div>

//         {time !== undefined ? <div style={{display:'flex'}}>
//         <div>{time}</div>
//         </div> : null}{/* This is conditional rendering if time is seen then its render if its a promoted post then not rendered  ?(works like a null*/}
      
//      </div>
//     </div>
   
//     <div style={{fontSize:12}}>{/* this is second child */}
//       {description}
//     </div>
//   </div>
// }



function App() {
  const[currentTab,setCurrentTab]= useState('feed')
  return(
    <div style={{display:'flex',justifyContent:'center'}}>
      <button onClick={function(){
        setCurrentTab('feed')
      }} style={{color:currentTab=='feed' ? 'red' : 'black'}}>Feed</button>
      
      <button onClick={function(){
        setCurrentTab('Notifications')}} style={{color:currentTab=='Notifications' ? 'red' : 'black'}}>Notifications</button>
      
      <button onClick={function(){
        setCurrentTab('MESSAGES')}} style={{color:currentTab=='MESSAGES' ? 'red' : 'black'}}>MESSAGES</button>

    </div>
    
  )
}


// const style={width:200,backgroundColor:"white",borderRadius:10,borderColor:"gray",padding:10}

// const ToggleMessage = () => {
//   const [isVisible,setIsVisible]= useState(false) // true value in isvisible and and function in setIsVisible
//   {/* returns a dependency array [true,fucntion] we r destructuring this arr putting true in setIsVisible */}
//   const [notificationCount,setnotificationCount]= useState(0)
//   return(
// <div>
//         <button onClick={()=>setnotificationCount(notificationCount+1) }> 
//             ToggleMessage
//         </button>
//         {notificationCount}
//         {isVisible && <p>Arey Kaju kAtlti letechale arey lete. AAAJ unse milna hai Hamein !</p>}
//     </div>
// )
// }

export default App


// name={"WakeelSahab"}
//             subtitle={"1M Followers "}
//             time={"2m Ago"}
//             image={"/symbol.png"}
//             description={"We are Building a product To revolutionize India Legal Industry. We believe in making Life easier for lawyer. Want to try our product?"}