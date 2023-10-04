import {useState} from 'react';

export default function NavigationItem({ title, href, id }) {

    const [checked, setChecked] = useState(false);

    function handleClick(){
        //! => negativ status von const
        setChecked(!checked)
    }

    return <div onClick={handleClick} style={{color: checked ? "red" : "black"}}>
        <li>{title}</li>
    </div>
}