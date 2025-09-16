import { useState,useEffect } from "react";

export function usePosttitle(){
    const [post,Setpost]=useState({})


    async function getposts() {
        const response=await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const json=await response.json()
        Setpost(json)
    }

    useEffect(()=>{
        getposts()
    },[])

    return post.title
}

export function useFetch(url){
    const [finalData,setFinalData] = useState({})

    async function getDetails(){
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json)
    }
    useEffect(()=>{
        getDetails()
    },[])

    return {
        finalData
    }

}