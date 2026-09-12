import { useState } from "react";

export default function Input1(){
    const [name, setName] = useState("");
    return(
        <div>
            <input value={name} onChange={event => setName(event.target.value)} />
            <p>Hello: {name}</p>
        </div>
    );
}