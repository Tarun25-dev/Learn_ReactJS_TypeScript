import { useState, type ChangeEvent } from "react";

type FormData = {
    name: string;
    email: string;
}

function ObjectStateInputForm(){
    const [form, setForm] = useState<FormData>({
    name:"", //initial value
    email:"",
    });
    function updateName(event: ChangeEvent<HTMLInputElement>){
        setForm(prev => ({...prev,name: event.target.value}));
    }
    function updateEmail(event: ChangeEvent<HTMLInputElement>){
        setForm(prev => ({...prev,email: event.target.value}));
    }

    return(
        <div>
            <p>{form.name}</p>
            <p>{form.email}</p>
            <input type="text" value={form.name} onChange={updateName}/>
            <input type="text" value={form.email} onChange={updateEmail}/>
        </div>
    )
}
export default ObjectStateInputForm;