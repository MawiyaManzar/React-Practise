import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='min-h-screen bg-blue-950 flex flex-col justify-center items-center'>
        <h1 className='text-3xl  text-white'><span className='text-green-600'>Webinar</span>.gg</h1>
        
        <div className='text-2xl text-white '>
          Verify Your Age
        </div>
        <div></div>
      </div>
    
  )
}

export default App
