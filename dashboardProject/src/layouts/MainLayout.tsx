import Footer from "../components/Footer/index.tsx"
import Header from "../components/Header/index.tsx";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react"
import { Outlet } from "react-router-dom";

export const ThemeContext = createContext({})
export const UserContext = createContext([]);




export default function MainLayout({children}:any) {

    const [isDark, setIsDark] = useState(false)
    const [users, setUsers] = useState()

    async function getUsers() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response
    }
    useEffect(()=>{

       const userData = getUsers().then(res => setUsers(res.data))
       console.log(userData)

    },[])

    console.log(users)
    return (
        <UserContext.Provider value={users}>
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                <div id="dashboardBackground" style={{ backgroundColor: isDark ? "black" : "" }} >
                    <Header />
                    <main id="main">

                        {children}

                    </main>
                    <Footer />
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>
    )



}