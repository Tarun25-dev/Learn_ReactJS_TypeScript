import type { ChangeEvent } from "react"
import type { MouseEvent } from "react";

function Change(){
    function handleChange(event: ChangeEvent<HTMLInputElement>){
            console.log(event.target.value);
    }
    return(
        <input type="text" onChange={handleChange} />
    );
}

// or we can write directly without type typing beacuse ts can auto infer its event type

export function TChange(){
    return(
        <input onChange={(event) => {
            console.log(event.target.value);
        }} />
    );
}

export function HandleClickEvent(){
    function buttonClick(event: MouseEvent<HTMLButtonElement>){
        console.log(event.currentTarget);
    }
    return <button onClick = {buttonClick}></button>;
}

export default Change;