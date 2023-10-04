import { useEffect, useState } from "react"
import ArticleOverview from "../views/ArticleOverview";

export default function Blog() {



    /* 
    
    Beispiel mit interval counter !!!
    
     const [number, setNumber] = useState(0);
    useEffect(() => {
        console.log("effect")
       const interval = setInterval(() => {
            setNumber(prev => prev + 1)
        }, 1000);


        //cleanup function
        return () => {
            console.log("CLEANUP")
            clearInterval(interval)
        }

    }, [number])
 */



    return (
        <>
            <h1>Blogpage</h1>
            <ArticleOverview/>
        </>
    )
}