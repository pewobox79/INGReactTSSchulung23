import ChangeBtn from "../ChangeBtn";
import { useContext } from "react";
import { ThemeContext } from "../../layouts/MainLayout";

import { ContextType } from "../../types/contectTypes";
export default function Header(){
    const context: Partial<ContextType> = useContext(ThemeContext)

    return <header>
        <h1 style={{color: context?.isDark ? "white": "black"}}>My Dashboard</h1>
        <ChangeBtn/>
    </header>
}