import { userContext1 } from "./UserContext2";
import { useContext } from "react";

function Profile(){
    const context = useContext(userContext1);
    if(!context){
        return <div>No User context found</div>
    }
    const {user,setUser} = context;
    
    function handleName(){
        setUser({
            name:"Tharun",
            role:"java"
        });
    }
    return(
        <div>
            <h2>Profile Details</h2>
            {user ? (<div>
            <p>Name: {user.name}</p><p>Role: {user.role}</p>:
            </div>) : (<p>No user Logged</p>)}
            <button onClick={handleName}>Change Name</button>
        </div>
    );
}

export default Profile;