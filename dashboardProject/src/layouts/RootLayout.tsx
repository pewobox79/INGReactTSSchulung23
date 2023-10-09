import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {

    //Diese Root element ist nur für REACT ROUTER - nicht für REACT COMPONENTS
    return (<>
        <Outlet />
    </>
    )
}
