import { useState } from "react";

function Input3(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return(
        <div>
            <p>Name: {name}</p>
            <input value={name} onChange = {event => setName(event.target.value)}/><br />
            <p>email: {email}</p>
            <input value={email} onChange = {event => setEmail(event.target.value)}/>
        </div>
    );
}

export default Input3;