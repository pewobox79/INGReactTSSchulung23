import React from 'react'

export default function ButtonMap() {

    const buttonTextOptions =[
        "Click me", 
        "Click me again",
        "click me one more time"
    ] as const

    // as const wandelt das array in ein readOnly array...die werte werden dann
    // über die map (option) sichtbar

    
  return (
    <button>
        {buttonTextOptions.map((option)=>{
            return option
        })}
    </button>
  )
}
