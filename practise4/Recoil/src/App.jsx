import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'

const CountContext=createContext()


function CountContextProcider({children}){
  const [count,setCount]=useState(0)
  return(
    <CountContext.Provider value={{count,setCount}}>
      {children}
    </CountContext.Provider>

  )
}

function Increase(){

  const {count,setCount}= useContext(CountContext)
  return <button onClick={() => setCount(count+1)}> IncreaseButton </button>
}
function Decrease(){

  const {count,setCount}= useContext(CountContext)
  return <button onClick={() => setCount(count - 1)}> DecreaseButton </button>
}

function Value(){
  const {count}= useContext(CountContext)
  return <div>{count}</div> 


}

function Parent(){
  return(
    <CountContextProcider>
      <Increase/>
      <Decrease/>
      <Value/>
    </CountContextProcider>

  )

}

function App() {

  return (
    <>
     <Parent/>
    </>
  )
}

export default App
