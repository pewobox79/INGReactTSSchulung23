
import React from "react";

type ButtonType = {
    title: string,
    style: React.CSSProperties;
    onClick?: ()=>void
}


// padding => array muss aus 4 nummer werten haben

//margin => muss aus string entries sein - aber unbegrenzt.


export default function ButtonFunctionProp({ style, title,onClick }: ButtonType) {


    return (
        <button onClick={onClick} style={style}>
            {title.toUpperCase()}
        </button>
    )
}
