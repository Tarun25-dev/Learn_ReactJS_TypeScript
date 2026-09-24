import { useState } from "react";
import { UserContext } from "./CreateContext";
import Profile from "./Profile";

type User = {
    name:string;
    role:string;
}

function App(){
    const [user, setUser] = useState<User | null>({
        name:"Tharun",role:"React developer"
    });
    return(
        <UserContext.Provider value={user}>
            <Profile />
        </UserContext.Provider>
    );
}

export default App;