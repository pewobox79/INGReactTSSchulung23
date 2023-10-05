import React, { useRef } from 'react'


export default function ButtonUseRef() {

    //konkrete typisierung auf das refernzElement => alle elemente die referencen haben
    const ref = useRef<HTMLInputElement>(null)

    return (
        <input ref={ref}>Clicken</input>
    )
}
