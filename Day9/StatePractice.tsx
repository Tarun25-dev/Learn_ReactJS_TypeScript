import { useState } from "react";

function Counter(){
    const [num, setNum] = useState(0);
    return(
        <div>
            <code>{num}</code>
            <button onClick={() => setNum(num + 1)}>[+]</button>
            <button onClick={() => setNum(num - 1)}>[-]</button>
        </div>
    );
}

export default Counter;
