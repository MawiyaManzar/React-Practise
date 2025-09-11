import { useState } from 'react'


const [count, setCount ]=useState(1);

export function increaseCount(){
        setCount(count+1)
    }

    return<div>
        <div style={{display:"flex"}}>
        <div style={{background:"red",borderRadius:20,width:20,height:25,paddingLeft:10,paddingTop:5}}>
            {count}
        </div>
        </div>
        <img style ={{cursor:"pointer"}} src={"https://www.bing.com/th/id/OIP._usfddSqknE3PjZMlEwtSAHaHa?w=202&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc4&dpr=1.4&pid=3.1&rm=2&ucfimg=1"} width={40}/>
    </div>