import { useState,useContext, createContext } from "react";

const BulbContext= createContext()

function BulbProvider({children}){
    const [bulbon,Setbulbon]= useState(true)
    return(
        <BulbContext.Provider>
            {children}
        </BulbContext.Provider>
    )
}

function App(){
    return(
        <div>
            <BulbProvider>
                <Light />
            </BulbProvider>
        </div>
    )
}

export default App
//state management better than context api re render optimization are better in zustand