import { useId } from "react";

type InputProps = {
    label: string;
};

function InputField({label}: InputProps){
    const id = useId();
    return(
        <>
        <label htmlFor={id} className="m-2 font-medium">{label}</label>
        <input type="text" id={id} className="border px-3 py-4 m-3 rounded"/>
        </>
    );
}

export default InputField;