import React, { useState } from 'react'

export default function ButtonHook() {

    //INITIAL Value defines TYPE
    const [count, setCount]=useState(0)

    // TYPING expected Value
    const [add, setAdd]=useState<number>()

  
  
    return (
    <button>ButtonHook</button>
  )
}
