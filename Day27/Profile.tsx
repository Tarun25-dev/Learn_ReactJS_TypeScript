import { UserContextObj } from "./UserContextData";
import { useContext } from "react";

function Profile(){
    const profile = useContext(UserContextObj);
    return(
        <div>
            <h1>Profile section</h1>
            <p>Name: {profile.name}</p>
            <p>Role: {profile.role}</p>
        </div>
    );
}

export default Profile;