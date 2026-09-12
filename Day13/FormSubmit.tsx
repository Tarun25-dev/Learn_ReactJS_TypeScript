import { useState, type ChangeEvent} from "react";
import type { SubmitEvent } from "react";

function SubmitForm(){
    const [name, setName] = useState("");
    function handleName(event: ChangeEvent<HTMLInputElement>){
            setName(event.target.value);
    }
    function handleSubmit(event:SubmitEvent<HTMLFormElement>){
                event.preventDefault();
                console.log("Form submitted");
    }
    return(
        <div>
            <p>{name}</p>
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleName} value={name}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SubmitForm;