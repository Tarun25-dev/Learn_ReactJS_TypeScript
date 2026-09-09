import { useState } from "react";

function UpdaterForm(){
    const [count, setCount] = useState(0);

    function increase(){
        setCount(prevCount => prevCount + 1);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increase}>Click</button>
        </div>
    );
}

export default UpdaterForm;

// strings as well

export function UpdaterFormString(){
    const [name, setName] = useState("Tharun");

    function Set(){
        setName(prevName => prevName.toUpperCase());
    }

    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={Set}>Change Name</button>
        </div>
    );
}