import { useEffect, useState } from "react";
import { getUsersAPI } from "./APIFunction";

type User = {
    id: number;
    name: string;
    email: string;
}

function SetUsers(){
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function LoadUsers(){
            try{
                const data = await getUsersAPI();
                setUsers(data);
            }
            catch{
                setError("Something went wrong!");
            }
            finally{
                setLoading(false);
            }
        }
        LoadUsers(); 
    });

    if(loading){
        return <p>Loading...</p>;
    }
    if(error){
        return <p>{error}</p>;
    }

    return(
        <>
        <h1>Users From API</h1>
        {users.map((u) => (<div key={u.id}><p>Name: {u.name}</p><p>Email: {u.email}</p></div>))}
        </>
    );
}

export default SetUsers;