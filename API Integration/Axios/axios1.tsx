import axios from "axios";
import { useEffect, useState } from "react";

interface User{
    id: number;
    name: string;
    email: string;
}

export function App(){
    const [users, setUsers] = useState<User []>([]);

    useEffect(() => {
        async function getUsers(){
            const response = await axios.get<User []>("https://jsonplaceholder.typicode.com/users");
            const data: User[] = response.data;
            setUsers(data);
        }
        getUsers();
    }, []);
    return(
        <>
        {users.map((user) => (
             <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <p>Email: {user.email}</p>
        </div>
        ))}
       
        </>
    );
}

export default App4;

function App2(){
    useEffect(() => {
        async function createPost(){
        const {data, status} = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            id: 1,
            title: "My first post",
            body: "Learning Axios",
            userId: 1
        });
        console.log(data);
        console.log(status);
    }
    createPost();

    }, []);
    return(
        <>
        
        </>
    );
}

// body
// : 
// "Learning Axios"
// id
// : 
// 101
// title
// : 
// "My first post"
// userId
// : 
// 1

function App3(){
    useEffect(() => {
        async function updatePost(){
            const update1 = axios.put("https:jsonplaceholder.typicode.com/posts/1", {
                id: 1,
                title: "Updated Title",
                body: "Updated body",
                userId: 1,
            });
            const update2 = axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
                title: "Update title only",
            });
        }
        updatePost();
    }, []);
    return(
        <>
        
        </>
    );
}

function App4(){
    useEffect(() => {
        async function deletePost(){
            const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
            console.log(response.status);
        }
    deletePost();
    });
}