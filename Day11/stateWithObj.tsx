import { useState } from "react";

type user = {
    name: string;
    age: number;
};

function User(){
    const [state,setState] = useState<user>({name:"tharun",age:23});
    return(
        <div>
            <p>{state.name}</p>
            <p>{state.age}</p>
            <button onClick={() => setState({name:"Tharun",age:25})}>click</button>
        </div>
    );
}

export default User;