import { useRef } from "react";
import CustomInput from "./CustomInput";
import type { InputActions } from "./CustomInput";

function App(){
    const inputRef = useRef<InputActions>(null);
    return(
        <>
        <CustomInput ref={inputRef}/>
        <br />
        <button onClick={() => inputRef.current?.focus()} className="rounded text-lg font-medium px-4 py-3 m-3 border cursor-pointer">Focus</button>
        <button onClick={() => inputRef.current?.clear()} className="rounded text-lg font-medium px-4 py-3 m-3 border cursor-pointer">Clear</button>
        </>
    );
}

export default App;