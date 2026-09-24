import { UserContext } from "./useContext";
import { useContext } from "react";

function Profile(){
    const ProfileName = useContext(UserContext);
    return(
        <>
        <section>
            <h1>Profile Page</h1>
            <p>Name: {ProfileName}</p>
        </section>
        </>
    );
}

export default Profile;