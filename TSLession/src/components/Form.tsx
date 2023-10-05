import React from 'react'
import { useState, useRef } from 'react'

const INIT_VALUE = {
    firstname: "",
    lastname: ""
}


export default function Form() {

    const firstNameInput = useRef<HTMLInputElement>(null)
    const lastNameInput = useRef<HTMLInputElement>(null)
    const formInput = useRef(null)

    const [user, setUser] = useState<{ firstname: string | undefined, lastname: string | undefined }>(INIT_VALUE);


    function handleChange(event: { target: { name: string; value: string; }; }) {

        setUser({ ...user, [event.target.name]: event.target.value })
        console.log("inner", user)
        //console.log(event.target.name, event.target.value)

    }

    console.log("user", user)


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        console.log(firstNameInput, lastNameInput)
        setUser({ firstname: firstNameInput.current?.value, lastname: lastNameInput.current?.value })
        console.log("forminput", formInput)
        console.log("submitted")
    }


    return (
        <form onSubmit={handleSubmit} ref={formInput}>
            <label htmlFor="firstname">Firstname</label><br />
            <input ref={firstNameInput} id="firstname" type="text" name="firstname" /><br />
            <label htmlFor="lastname">Lastname</label><br />
            <input ref={lastNameInput} id="lastname" type="text" name="lastname" /><br />
            <button type="submit">Submit</button>
        </form>
    )
}
