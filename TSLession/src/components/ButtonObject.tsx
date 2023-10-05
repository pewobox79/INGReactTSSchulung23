import React, { useState } from 'react'


type UserType = {
    name: string,
    age: number
}
export default function ButtonObject() {

    const [user, setUser] = useState<UserType | null>(null)
    //const [user, setUser] = useState({name: "", age: 0})

    const username = user?.name

    setUser({ name: "Peter", age: 44 })


    return (
        <div>{username}</div>
    )
}
