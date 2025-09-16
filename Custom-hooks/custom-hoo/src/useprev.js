import { useRef,useEffect } from "react";

export function usePrev(value) {
    const ref=useRef()
    console.log("Rerendered with updated value" + value )

    useEffect(()=>{
        console.log("updated to" + value )
        ref.current=value
    },[value])


    console.log("returned" + ref.current)
    return ref.current
}
//it returns first effect get called later