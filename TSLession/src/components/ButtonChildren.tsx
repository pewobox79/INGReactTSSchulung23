
import React from "react";

type ButtonType = {
    style: React.CSSProperties,
    onClick?: () => void,
    children: JSX.Element[] //explizit JSX.ELEMENT => React.ReactNode === kann jeder datentyp und element sein
}


// padding => array muss aus 4 nummer werten haben

//margin => muss aus string entries sein - aber unbegrenzt.


export default function ButtonChildren({ style, onClick, children }: ButtonType) {


    return (
        <button onClick={onClick} style={style}>
            {children}
        </button>
    )
}
