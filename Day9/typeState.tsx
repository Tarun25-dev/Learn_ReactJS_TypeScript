import { useState } from "react";

type User = {
    name: string;
    age: number;
};


function StateType(){
    const [user, setUser] = useState<User>({name: "tharun", age: 23});
    return(
        <div>
            <p>Current Name and Age</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={() => setUser({name: "rahul", age: 25})}>Change User</button>
        </div>
    );
}

export default StateType;
