import { useContext } from "react";
import { UserContext } from "./CreateContext";

function Profile(){
    const user = useContext(UserContext);
    return(
        <div>
            <p>{user.name}</p>
            <p>{user.role}</p>
        </div>
    )
}

export default Profile;