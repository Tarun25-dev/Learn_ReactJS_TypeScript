import { forwardRef, useImperativeHandle, useRef } from "react";

export type InputActions = {
    focus: () => void;
    clear: () => void;
};

const CustomInput = forwardRef<InputActions>(function CustomInput(_,ref){
        const inputRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => ({
            focus() {
                inputRef.current?.focus();
            },
            clear() {
                if(inputRef.current){
                    inputRef.current.value = "";
                }
            },
        }));
        return(
            <>
            <input type="text" ref={inputRef} placeholder="Enter your Name." className="rounded text-lg font-semibold px-3 py-4 border m-4"/>
            </>
        );
});

export default CustomInput;