import {useState} from "react";
import type {ChangeEvent} from "react";

function Input2(){
    const [name, setName] = useState(""); //ts know name is a string

    function HandleChangeEvent(event: ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }
    return(
        <div>
        <p>Name: {name}</p>
        <input value={name} onChange={HandleChangeEvent}/>
        </div>
    );
}

export default Input2;