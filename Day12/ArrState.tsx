import { useState } from "react";

interface Profile{
    id: number;
    name: string;
}

function ArrayState(){
    const [profile, setProfile] = useState<Profile[]>([
        {id: 1, name: "tharun"},
        {id:2, name: "kumar"},
        {id: 3, name:"nani"},
        {id:4, name: "rahul"}
    ]);

    function AddProfile(){
        setProfile(prev => ([...prev,{id:5, name:"kodiganti"}]));
    }

    return(
        <div>
            {profile.map(item => (
                <p key={item.id}>{item.name}</p>
            ))}
            <button onClick={AddProfile}>Add Profile</button>
        </div>
    );
}

export default ArrayState;
