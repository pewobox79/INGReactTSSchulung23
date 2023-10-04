import { useState } from "react";


export default function ArticleItem({ title, body, id }) {

    function handleRead(){
        setDone(true)
    }

    const [done, setDone] = useState(false);
    return (
        <div onClick={handleRead} style={{ textDecoration: done ? "line-through" : "", border: "1px solid lightgrey", borderRadius: "10px", width: "80%", margin: "10px auto", textAlign: "center", lineHeight: "20px", padding: "15px" }}>
            <h4>{title} / {id}</h4>
            <p>{body}</p>
        </div>)
}