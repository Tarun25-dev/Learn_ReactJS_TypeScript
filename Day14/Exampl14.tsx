import { useState, type ChangeEvent } from "react";
import type { SubmitEvent } from "react";

interface FormData{
    name:string;
    email:string;
    city:string;
};

function ExampleMulInp(){
    const [form, setForm] = useState<FormData>({
        name:"",
        email:"",
        city:""

    });

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target; 
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
        // console.log(event.target.name); // "name" / "email" / "city"
        // console.log(event.target.value);
    }

    function handleSubmit(event: SubmitEvent<HTMLFormElement>){
            event.preventDefault();
            console.log(form);

            setForm({
                name:"",
                email:"",
                city:"",
            });

            alert("Submitted");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" value={form.name} onChange={handleChange}/>
            <input type="text" placeholder="Email" name="email" value={form.email} onChange={handleChange}/>
            <input type="text" placeholder="city" name="city" value={form.city} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ExampleMulInp;