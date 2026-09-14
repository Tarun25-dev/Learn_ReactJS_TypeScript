import { useEffect, useState } from "react";

function UseEffectDependency(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title= `${count}`;
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

export default UseEffectDependency;