import { useEffect, useState } from "react";

function Cleanup2(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Effect started");
        return () => {
            console.log("cleaned Up");
        }
    }, [count]);
    return(
            <div>
            <p>COUNT: {count}</p>
            <button onClick={() => {
                setCount(preq => preq + 1);
            }}>Increase</button>
        </div>
    );
}

export default Cleanup2;