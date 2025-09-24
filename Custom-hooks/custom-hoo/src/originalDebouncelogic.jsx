import React from "react";
import { useState,useEffect } from "react";

export const useDebounced = (value,delay)=>{
    const [debouncedValue,SetdebouncedValue] = useState(value)
    useEffect(()=>{
        const handler =setTimeout(()=>{
            SetdebouncedValue(value)
        },delay)

        return(
            ()=>clearTimeout
        )
    },[value,delay])
    return(
        debouncedValue
    )
}