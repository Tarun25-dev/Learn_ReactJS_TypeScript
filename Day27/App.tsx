import { UserContext } from "./useContext";
import Navbar from "./Navbar";
import Profile from "./Profile";

function App(){
    return(
        
        <UserContext.Provider value="Tharun Kumar">
            <Navbar />
            <Profile />
        </UserContext.Provider>
        
    );
}

export default App;