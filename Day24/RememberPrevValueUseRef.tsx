import { useEffect, useRef, useState } from "react";

function PrevUseRef(){
    const [count, setCount] = useState(0);
    const prevCount = useRef<number | undefined>(undefined);

    useEffect(() => {
        prevCount.current = count;
    });
    return(
        <div>
            <p>Count:{count}</p>
            <p>Previous Count: {prevCount.current}</p>
            <button onClick={() => {
                setCount(preq => preq+1);
            }}>Increase</button>
        </div>
    );
}

export default PrevUseRef;