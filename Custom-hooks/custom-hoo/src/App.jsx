import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import { useFetch, usePosttitle } from './usefetch'
import './App.css'
import { usePrev } from './useprev'
im

function useCounter(){
  const[count,SetCOunt]= useState(0)

  function increaseCount(){
    SetCOunt(count+1)
  }
  
  return{
    count:count,
    increaseCount:increaseCount
  }
}
function useDebounce(originalFunction){

const currentClock= useRef()

const fn = ()=>{
    clearTimeout(currentClock.current)
    currentClock.current=setTimeout(originalFunction,550)
}
return fn;
}




function App() {

function sendDatatoBackend(){
  console.log("req sent to backend")
  fetch("api.amazon.com/search")
}

const debouncedFn= useDebounce(sendDatatoBackend)


const {count,increaseCount}=useCounter()
const {finalData}= useFetch("https://jsonplaceholder.typicode.com/posts/1");
const prev = usePrev(count)
return(
  <>
  {/* {JSON.stringify(finalData.title)} */}

  <input type='text' onChange={debouncedFn}></input>
  
  <p>{count}</p>
  <button onClick={increaseCount}>increase</button>
  <p> eng mei the previous value is {prev} </p>
  </>
)
}


export default App
