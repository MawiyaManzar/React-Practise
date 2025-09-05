import React, { useState } from "react";

export function PostComponent({name,subtitle,description,time,image})
{
  return <div style={style}>  {/*This is father div*/}
    <div style={{display:'flex'}} >{/* this is first child */}
      <img src={image}
      style={{width:30, height:30,borderRadius:20}} 
      />{/* image div first child*/}
     <div style={{marginLeft:10,fontSize:10}}>{/*this is grandson has accountName,followerCount,TimeUploaded */}
      <b>{name}</b>
      <div>{subtitle} </div>

        {time !== undefined ? <div style={{display:'flex'}}>
        <div>{time}</div>
        </div> : null}{/* This is conditional rendering if time is seen then its render if its a promoted post then not rendered  ?(works like a null*/}
      
     </div>
    </div>
   
    <div style={{fontSize:12}}>{/* this is second child */}
      {description}
    </div>
  </div>
}