

export default function Button(
    {backgroundColor, title, fontSize}:
    {backgroundColor:string, title: string, fontSize: string}) {
   
    //const bgColor = props.backgroundColor;

    //alternativ destructor
    //const {backgroundColor}= props;

  return (
    <button  style={{backgroundColor: backgroundColor, fontSize: fontSize}}>{title}</button>
  )
}
