import { useState } from "react";

function Parent(){
    const [count, setCount] = useState(0);
    return(
        <div>
        <p>Count: {count}</p>
        <CounterButton onIncrease={() => {
            setCount(prev => prev+1);
        }} />
        </div>
    );
}

export default Parent;

type CounterButtonProp = {
    onIncrease: () => void;
};

export function CounterButton({onIncrease}: CounterButtonProp){
    return(
        <button onClick={ onIncrease }>Increase</button>
    );
}