import { useEffect, useState } from "react";

function UseEffect1(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Effect Run Every time re-renders this  component")
    })
    return(
        <div>
            <p>COUNT: {count}</p>
            <button onClick={() => {
                setCount(preq => preq + 1);
            }}>Increase</button>
        </div>
    );
}

export default UseEffect1;
