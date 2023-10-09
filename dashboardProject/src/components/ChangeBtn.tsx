import { useContext } from "react"
import { ThemeContext } from "../layouts/MainLayout"
import { ContextType } from "../types/contectTypes"


export default function ChangeBtn() {

    const context: Partial<ContextType> = useContext(ThemeContext)

    function handleChange() {
        context.setIsDark(!context.isDark)
    }
    return (
        <button onClick={handleChange} id="changeColorBtn">BtnDarkMode</button>
    )
}
