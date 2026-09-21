import {useMemo, useState} from "react";

function UseMemoHook(){
    const [count, setCount] = useState(0);

    const result = useMemo(() => {
        console.log("Calculating...");
        return count * 10;
    }, [count]);
    return(
        <div>
            <p>Count: {count}</p>
            <p>Result: {result}</p>
            <button onClick={() => setCount(prev => prev+1)}>Increase</button>
        </div>
    );
}

export default UseMemoHook;
