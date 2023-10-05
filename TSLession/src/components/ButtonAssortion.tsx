import React, {useEffect} from 'react'
import { Colors } from '../types/typing'


export default function ButtonAssortion() {
  
  
    useEffect(()=>{

            const myButtonColor = localStorage.getItem("buttonColor") as Colors
            console.log(myButtonColor)

    },[])
  
    
    return (
    <div>ButtonAssortion</div>
  )
}
