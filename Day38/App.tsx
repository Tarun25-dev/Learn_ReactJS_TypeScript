import { useRef } from "react";
import CustomInput from "./CustomInputForForwardRef";

function App(){
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFocus(){
        inputRef.current?.focus();
    }
    function handleSelect(){
        inputRef.current?.select();
    }
    return(
        <>
        <CustomInput ref={inputRef}/>
        <br />
        <button onClick={handleFocus} className="px-4 py-3 border text-lg font-bold m-3">click to focus input</button>
        <button onClick={handleSelect} className="px-4 py-3 border text-lg font-bold">Click to select input name</button>
        </>
    );
}

export default App;