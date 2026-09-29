import { memo } from "react";

type User = {
    name: string;
};

const UserProfile = memo(function UserProfile({name}: User){
    console.log("Only re-render when props change");
    return(
        <>
        <h1>Hello {name}</h1>
        </>
    );
})

export default UserProfile;
    
