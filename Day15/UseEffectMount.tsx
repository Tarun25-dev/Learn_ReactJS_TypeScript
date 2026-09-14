import { useEffect, useState } from "react";

function Mount(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title= "My-Portfolio";
    }, []);
    return(
            <div>
            <p>COUNT: {count}</p>
            <button onClick={() => {
                setCount(preq => preq + 1);
            }}>Increase</button>
        </div>
    );
}

export default Mount;