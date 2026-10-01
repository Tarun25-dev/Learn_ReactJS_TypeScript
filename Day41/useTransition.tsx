import { useState, useTransition } from "react";

function CounterTransition(){
    const [count, setCount] = useState(0);
    const [isLoading, startTransition] = useTransition();
   
    function handleClick(){
        startTransition(() => {
            setCount(preq => preq + 1);
        });
    }
    return(
        <>
        {isLoading && (<p>Loading...</p>)}
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increase</button>
        </>
    );
}

export default CounterTransition;