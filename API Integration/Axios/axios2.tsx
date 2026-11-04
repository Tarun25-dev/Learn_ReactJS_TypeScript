import axios from "axios";
import { useEffect, useState } from "react";

interface User{
    id: number;
    name: string;
    email: string;
}
export default function App(){
    const [users, setUsers] = useState<User []>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getUsers(){
            try{
                const {data} = await axios.get<User []>("https://jsonplaceholder.typicode.com/users");
                setUsers(data);
            }catch(error){
                if(axios.isAxiosError(error)){
                    setError(error.response ? `Error: ${error.status}` : "Network Error!");
                }else{
                    setError("Something went wrong!");
                }
            }finally{
                setLoading(false)
            }
        }
        getUsers();
    });

    if(loading) return <p>Loading Users...</p>;
    if(error) return <p>{error}</p>

    return(
        <>
            {users.map((user) => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ))}
        </>
    );
}

// Timeout

function App2(){
    useEffect(() => {
        async function timeout(){
            try {
                const {data} = await axios.get("https://jsonplaceholder.typicode.com/users", { timeout: 4000 });

            }catch(error){
                if(axios.isAxiosError(error) && error.code == "ECONNABORTED"){
                    console.log("request Time-out");
                }
            }
        }
    });
}

// Cancellation

function App3(){
    useEffect(() => {
        const controller = new AbortController();
        async function cancellation(){
            try{
                const {data} = await axios.get("https://jsonplaceholder.typicode.com/users", { signal: controller.signal});
            } catch(error){
                if(axios.isAxiosError(error)) return;
                console.log(error);
            }
        }
        return () => controller.abort();
    }, []);
}