
import React from "react";

type ButtonType = {
    title: string,
    style: React.CSSProperties;

}


// padding => array muss aus 4 nummer werten haben

//margin => muss aus string entries sein - aber unbegrenzt.


export default function ButtonCSSProperties({ style, title }: ButtonType) {


    return (
        <button style={style}>
            {title.toUpperCase()}
        </button>
    )
}
