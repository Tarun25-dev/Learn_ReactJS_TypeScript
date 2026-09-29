import { useCallback, useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const sayHello = useCallback(() => {
        console.log("Hello");
    }, []); // same refernce after first render,

    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={sayHello}>Same Reference until dependencies Changed</button>
        </>
    );

}

export default Counter;