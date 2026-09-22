import { useRef } from "react";

function UseRef1(){
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFocus(){
        inputRef.current?.focus();
    }
    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleFocus}>Focus Input Button</button>
        </div>
    );
}

export default UseRef1;
