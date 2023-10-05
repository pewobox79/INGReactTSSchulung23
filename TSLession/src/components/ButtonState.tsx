
import { ButtonType } from "../types/typing";

//beispiel INTERFACE vs TYPE
interface URL {
    url: string,
    param?: string

}

const url: URL = {
    url: "https://"
}



//Type example
type Url = string

const url2: Url= "https://google.de"




console.log(url, url2)
// padding => array muss aus 4 nummer werten haben

//margin => muss aus string entries sein - aber unbegrenzt.


export default function ButtonState({ style, title, setCount }: ButtonType) {

    
    return (
        <button onClick={()=> setCount(prev => prev +1)}style={style}>
            {title.toUpperCase()}
        </button>
    )
}
