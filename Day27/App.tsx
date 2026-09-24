import Profile from "../Example27/Profile";
import { UserContextObj } from "./UserContextData";

function App(){
    return(
        <UserContextObj.Provider value={{name:"Tharun",role:"React Developer"}}>
            <Profile />
        </UserContextObj.Provider>
    );
}

export default App;