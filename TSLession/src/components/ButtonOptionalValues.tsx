

//Union Type decleration für backgroundColor => es kann nur eine der optionen sein!

type CorporateColors = "red" | "yellow" | "blue";

type ButtonType = {
    backgroundColor: CorporateColors,
    title: string,
    fontSize: string,
    fontColor: CorporateColors,
    border?: string,
    
}

export default function ButtonOptionalValues({ backgroundColor, title, fontSize, fontColor }: ButtonType) {

    return (
        <button style={{ backgroundColor: backgroundColor, fontSize: fontSize, color: fontColor }}>
            {title.toUpperCase()}
        </button>
    )
}
