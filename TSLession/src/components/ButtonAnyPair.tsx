import React from 'react'

export default function ButtonAnyPair() {

    // GENERICS in TypeScript
    function convertToArray<T>(value:T): T[]{

        return [value]
    }

    const newArray = convertToArray(5)
    console.log("array", newArray)
  return (
    <div>ButtonAnyPair</div>
  )
}
