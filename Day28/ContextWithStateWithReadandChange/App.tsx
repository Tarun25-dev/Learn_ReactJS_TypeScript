import { useState } from "react";
import { userContext1 } from "./UserContext2";

type User = {
    name: string;
    role: string;
}
function App(){
    const [user, setUser] = useState<User | null>({
        name:"JOHN DOE",
        role:"React"
    });
    return(
        <userContext1.Provider value={{user, setUser}}>

        </userContext1.Provider>
    );
}

export default App;