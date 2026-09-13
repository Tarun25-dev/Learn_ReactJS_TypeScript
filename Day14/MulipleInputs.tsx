import { useState, type ChangeEvent } from "react";
import type { SubmitEvent } from "react";

type FormData = {
    name: string;
    email: string;
};

function MulInp1(){
    const [form, setForm] = useState<FormData>({
        name:"",
        email:""
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>){
            const {name, value} = event.target;
            setForm(prev => ({
                ...prev,
                [name]: value,
            }));
    }

    function handleSubmit(event: SubmitEvent<HTMLFormElement>){
            event.preventDefault();
            console.log(form);
            setForm({
                name:"",
                email:""
            });
    }
    return(
        <form onSubmit={handleSubmit}>
            <p>Name: {form.name}</p>
            <input type="text" name="name" value={form.name} onChange={handleChange}/>
            <p>Email: {form.email}</p>
            <input type="text" name="email" value={form.email} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MulInp1;