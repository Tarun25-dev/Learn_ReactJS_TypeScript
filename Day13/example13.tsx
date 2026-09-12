import { useState, type ChangeEvent, type SubmitEvent } from "react";

interface User{
    name: string;
    age: number;
};

function Example13(){
    const [users, setUsers] = useState<User[]>([]); // Empty array.
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    function handleName(event:ChangeEvent<HTMLInputElement>){
            setName(event.target.value);
    } 
    function handleAge(event:ChangeEvent<HTMLInputElement>){
            setAge(event.target.value);
    }

    function handleSubmit(event:SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("Form submitted");

        const newUser: User = {
            name: name,
            age: Number(age)
        };
        setUsers(prev => [...prev,newUser]);
        
        {users.forEach((e) => {
            console.log(e.name);
            console.log(e.age);
        })};

        setName("");
        setAge("");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleName} />
                <input value={age} onChange={handleAge} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Example13;