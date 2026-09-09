import { useState } from "react";

function Increment(){
    const [count, setCount] = useState(0);
    function AddFive(){
        setCount(prev => prev + 5);
    }
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={AddFive}>PLUS FIVE</button>
        </div>
    );
}

export default Increment;