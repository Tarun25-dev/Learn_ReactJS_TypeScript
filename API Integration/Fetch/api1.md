### API integration with js

#### What is API (Application Programming Interface)?

**API is a set of rules and methods that allows one software application to communicate with and request data, services from another application or system.**

*Particularly in js:*

**An API is a way for javascript to interact with external data, services, or browser features.**

### fetch() 
- allows js to communicate with a web API and get data from a server.
- Suppose your react app wants data from a server:
```text
react app
⬇️
fetch()
⬇️
api / server
⬇️
data
⬇️
react app
```

1. Lets start outside react so we can understand the api itself:
```js
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {console.log(data)});
```
- fetch(url) this sends a request to the API.
- The server sends a response back so .then((response) => ...)
- But the response isn't directly the javascript array we want.
- response.json() this reads the response body and converts json into javascript data.
- that stored on data so print it with console.log()
- So data contains the actual users.

2. Why .then()
- fetch() doesn't give us the data immediately and the request takes some time.
- Thats why fetch() works asynchronously

- you'll eventually learn two ways of handling this:
- .then()
- async / await

3. async / await version
```js
async function getUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data);
}

getUsers();
```

4. How bring react into it?
- This is where useState becomes useful.
```tsx
import {useEffect, useState} from "react";
interface User {
    id: number;
    name: string;
    email: string;
}

function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if(!response.ok){
                    throw new Error("Failed to fetch users");
                }

                const data: User[] = await response.json();
                setUsers(data);
            } catch (error){
                setError(error instanceof Error ? error.message : "Something went wrong");
            } finally {
                setLoading(false);
            }
            
            
        }
        getUsers();
    }, []);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;

    return(
        <>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}<p>
                </div>
            ))}
        </>
    );
}
```

