import { forwardRef } from "react";

const CustomInput = forwardRef<HTMLInputElement>(function CustomInput(_,ref){
    return(
        <>
        <input type="text" ref={ref} placeholder="Enter your Name" className="border rounded px-4 py-3 m-3"/>
        </>
    );
})

export default CustomInput;