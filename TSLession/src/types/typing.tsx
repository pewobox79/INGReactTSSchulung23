
export interface ComponentOne{
    button: ButtonType;



}




export type ButtonType = {
    title: string,
    style: React.CSSProperties,
    color?: Colors,
    setCount: React.Dispatch<React.SetStateAction<number>>
}


export type Colors = "red" | "yellow" | "blue";