import { useCounter } from "./useCounter";

function Counter(){
    const {count,increase,decrease,reset} = useCounter();
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
