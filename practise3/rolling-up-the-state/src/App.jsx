import { useState ,createContext,useContext} from 'react'
import './App.css'

const CountContext= createContext()

function CountContextProvider({children}){
  const [useCount,SetCount]=useState(0)

  return(
    <CountContext.Provider value={{useCount,SetCount}}>
      {children}
    </CountContext.Provider>
  )
}

function Increase(){
  const[useCount,SetCount]= useContext(CountContext)

  return(
    <><button onClick={()=>SetCount(useCount+1)}>Increase</button></>
  )
}

function Decrease(){
  const {useCount,SetCount}= useContext(CountContext)

  return(
    <><button onClick={()=>SetCount(useCount-1)}>Decrease</button></>
  )
}

function Value(){
  const {useCount}= useContext(CountContext)
  return(
    <p>Count: {useCount}</p>
  )
}

function Parent(){
  return(
    <CountContextProvider>
      <Increase>
        <Decrease>
          <Value></Value>
        </Decrease>
      </Increase>
    </CountContextProvider>
  )
}

function App(){
  return(
    <>
    <Parent>

    </Parent>
    </>
  )
}

export default App