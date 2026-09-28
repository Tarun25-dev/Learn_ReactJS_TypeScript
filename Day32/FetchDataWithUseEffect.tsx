import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
};

function FetchData(){
    const [user, setUser] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUsers(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if(!response.ok){
                        throw new Error("Failed to fetch users");
                }
                const data: User[] = await response.json();
                setUser(data);
            }
            catch{
                setError("Something Wrong!");
            }
            finally{
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (loading){
        return <p>Loading...</p>
    }
    if (error){
        return <p>{error}</p>
    }

    return(
        <div>
            <h1>Data from Api</h1>
            {user.map((u) => (
                <div key={u.id}>
                    <p>Name: {u.name}</p>
                    <p>Email: {u.email}</p>
                </div>
            ))}
        </div>
    );
}

export default FetchData;