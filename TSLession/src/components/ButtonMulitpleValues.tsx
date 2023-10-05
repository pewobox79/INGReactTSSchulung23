

type CorporateColors = "red" | "yellow" | "blue";

type ButtonType = {
    title: string,

    backgroundColor: CorporateColors,
    fontSize: string,
    fontColor: CorporateColors,
    border?: string,
    padding: [number, number, number?, number?] // tuple
    margin?: string[] //fehlerhaftes CSS


}


// padding => array muss aus 4 nummer werten haben

//margin => muss aus string entries sein - aber unbegrenzt.


export default function ButtonMultipleValues({ backgroundColor, padding, fontColor, fontSize, margin title }: ButtonType) {


    return (
        <button style={{backgroundColor, fontColor, fonSize,} }>
            {title.toUpperCase()}
        </button>
    )
}
