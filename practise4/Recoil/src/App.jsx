import { evenSelector,counterAtom,networkAtom,jobAtom,messagingAtom,notificationsAtom } from './atoms'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useMemo } from 'react'
function App() {

    return( 
    <RecoilRoot>
    <MainApp></MainApp>
     </RecoilRoot>
  )
}

function MainApp(){
  const networknotificatnCount= useRecoilValue(networkAtom)
  const jobsNotCount= useRecoilValue(jobAtom)
  const [messagingCount,SetmessagingCount]= useRecoilState(messagingAtom)
  const NotificationsCount= useRecoilValue(notificationsAtom)
  const TotalnotificationCount = useMemo(()=>{

    return networknotificatnCount+jobsNotCount+messagingCount+NotificationsCount
  },[networknotificatnCount,jobsNotCount,messagingCount,NotificationsCount]) 

  return(
    <>
    <button>Home</button> 
    <button>My network({networknotificatnCount>=100 ? "99+" : networknotificatnCount})</button> 
    <button>Jobs({jobsNotCount})</button> 
    <button onClick={()=>{SetmessagingCount(messagingCount+1)}}>Messaging({messagingCount})</button> 
    <button>Notifications({NotificationsCount})</button> 
    <button>Me total notif ({TotalnotificationCount})</button>
    </>
  )
  }

function Button(){
  const setCount=useSetRecoilState(counterAtom)

  function increase(){
    setCount(c=>c+2)
  }
    function decrease(){
    setCount(c=>c-1)
  }


  return <>
  <button onClick={increase}>Increase</button>
  <button onClick={decrease}>deccrease</button>
</>}

function Counter(){
  const count=useRecoilValue(counterAtom)
  return <div>
    {count}
  </div>


}

function Iseven(){
  const even=useRecoilValue(evenSelector)
  return <div>
    {even ? "even" : 'odd'}
  </div>

}


export default App
