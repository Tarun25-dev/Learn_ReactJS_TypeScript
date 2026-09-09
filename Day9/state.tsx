import { useState } from "react";

function StateNum(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count+1)}>increase count</button>
        </div>
    );
}

export default StateNum;

// with strings

export function StateSTR(){
    const [name, setName] = useState("Tharun");
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={() => setName("Rahul")}>Change Name</button>
        </div>
    );
}