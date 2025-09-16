import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useFetch, usePosttitle } from './usefetch'
import './App.css'
import { usePrev } from './useprev'

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



function App() {
const {count,increaseCount}=useCounter()
const {finalData}= useFetch("https://jsonplaceholder.typicode.com/posts/1");
const prev = usePrev(count)
return(
  <>
  {/* {JSON.stringify(finalData.title)} */}
  
  <p>{count}</p>
  <button onClick={increaseCount}>increase</button>
  <p> eng mei the previous value is {prev} </p>
  </>
)
}


export default App
