import React from "react"
import Navbar from "./Navbar"
import Data from "./Data"
import Log from "./Log"

export default function App(){
  const travelCards = Data.map(item =>{
    return <Log 
            item = {item}
    />
  })
  return(
   <div>
     <Navbar />
     {travelCards}
     </div>
  )
}
