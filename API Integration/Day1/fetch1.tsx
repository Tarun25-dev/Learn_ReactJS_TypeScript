import { useEffect, useState } from "react";

interface User{
    id: number;
    name: string;
    email: string;
}

function App(){
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getUsers(){
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if(!response.ok){
                    throw new Error("Failed to fetch users");
                }

                const data: User[] = await response.json();
                setUsers(data);
            } catch(error) {
                setError(error instanceof Error ? error.message : "Something went wrong");
            } finally {
                setLoading(false);
            }
        }
        getUsers();
    }, []);

    if (loading) return <p>Loading....</p>;
    if (error) return <p>Error: {error}</p>;

    return(
        <>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </>
    );
}

export default App;