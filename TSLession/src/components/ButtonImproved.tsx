
type ButtonType ={
    backgroundColor: string,
    title: string,
    fontSize: string,
    border?: string
}

export default function ButtonImproved({ backgroundColor, title, fontSize }:ButtonType) {


    return (
        <button style={{ backgroundColor: backgroundColor, fontSize: fontSize }}>
            {title.toUpperCase()}
        </button>
    )
}
