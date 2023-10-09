import { useContext } from "react"
import { ThemeContext } from "../../layouts/MainLayout"
import { ContextType } from "../../types/contectTypes"

export default function Footer() {

   
    const context: Partial<ContextType> = useContext(ThemeContext)
    console.log(context)
    
    return <footer id="footer">

        <p style={{color: context.isDark ? "white": "black"}}>my dashboard - final project of Peter</p>
    </footer>
}
