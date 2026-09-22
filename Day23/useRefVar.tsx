import { useRef, useState } from "react";

function UseRef2(){
    const [count, setCount] = useState(0);

    const renderCount = useRef(0);
    console.log("Component rendered");

    function changeRef(){
        renderCount.current += 1;
        console.log(renderCount.current);
    }
    

    return(
        <>
        <h1>State: {count}</h1>
        <button onClick={() => {
            setCount(count+1);
        }}>Change State</button>

        <button onClick={changeRef}>Change Ref</button>
        </>
    );
}

export default UseRef2;