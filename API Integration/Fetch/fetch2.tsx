import { useEffect, useState } from "react";

interface User{
    id: number;
    title: string;
}

export function App(){
    const [user, setUser] = useState<User []>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getUser1(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
                if(!response.ok){
                    throw new Error("Failed to fetch user");
                }
                const data: User[] = await response.json();
                console.log(data);

                setUser(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Something went wrong!");
            }
        }
        getUser1();
    }, []);

    if(error) return <p>Error: {error}</p>

    return(
        <>
        <h1>User 1</h1>
        {user.map((user) => (
            <div key={user.id}>
                <p>{user.title}</p>
            </div>
        ))}
        </>
    );
}

export function App2(){

    useEffect(() => {
        async function sendPost(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: "My First Post",
                        body: "Leaning React API Integration",
                    }),
                });
                if(!response.ok) throw new Error("Failed to fetch post");

                const data = await response.json()
                console.log("Created Post", data);

            } catch (error) {
                console.log(error);
            }
        }
        sendPost();
    }, []);
    return(
        <p>created Post</p>
    );
}

export function App3(){
    const [post, setPost] = useState<unknown>(null);

    useEffect(() => {
        async function updatePost(){
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
                method: "Put",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: 1,
                    title: "Updated title",
                    body: "Updated content",
                    userId: 1,
                }),
            });
            if(!response.ok) console.log("Failed to update post!");

            const data = await response.json();
            setPost(data);
            console.log(data);
        }
        updatePost();
    }, []);
    return(
        <>
        <pre>{JSON.stringify(post, null, 2)}</pre>
        </>
    );
}

// Preserves line breaks and white space, so the object appears formatted.
// null means no custom filtering or transformation.
// 2 is an indentation spaces to make the JSON readable like:
// before: {"id": 1, "title": "title"}
/* after: 

{
  "id": 1,
  "title": "Title",
}

Observe gap of spaces is 2 
*/
// If we dont know what are the properties of an object that we want to show on the ui then simpley use pre tag then we can see total object in ui or else we can see in console by console.log to know which properties exists.

export default function App4(){
    const [post1, setPost1] = useState<unknown>(null);

    useEffect(() => {
        async function updateUser(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
                method: "PATCH",
                headers: {
                    "Content-Type": "appication/json",
                },
                body: JSON.stringify({
                    title: "Updated title",
                }),
            });
            if(!response.ok) console.log("Failed to update post");
            const data: unknown = await response.json();
            console.log(response.status);
            setPost1(data);
        }
        updateUser();
    }, []);
    return(
        <>
        <pre>{JSON.stringify(post1, null, 2)}</pre>
        </>
    );
}