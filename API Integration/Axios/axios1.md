### What is Axios?

A third party HTTP client library, it does the same job as fetch() with less boilerplate.

**Installation:**
```js
npm install axios
```

**Import:**
```js
import axios from "axios";
```

1. **GET and response.data:**

```tsx
async function getUsers(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
    console.log(response.status);
}
```
- response.data gives us a javaScript objects of arrays of users, JSON format converted/parsed by axios auto.
- That parsed data stored on response.data property.
- response.status: 200

#### Add types with a genaeric

```tsx
interface User{
    id: number;
    name: string;
    email: string;
}

const {data} = await axios.get<User []>("https://jsonplaceholder.typicode.com/users");
```
- data is now typed as User[].
- {data} is destructuring, the same as const data = response.data.

2. GET in React

```tsx
function App(){
    const [users, setUsers] = useState<User []>([]);

    useEffect(() => {
        async function getUsers(){
            const {data} = await axios.get<User []>("https://jsonplaceholder.typicode.com/users");
            setUsers(data);
        }
        geyUsers();
    });
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
```
#### query parameters with params

```tsx
const {data} = await axios.get<User []>("https://jsonplaceholder.typicode.com/users",
    params: {
        userId: 1,
        _limit: 5,
    }
);

```
- axios builds `/posts?userId=1&_limit=5` itself so, there is no manual ?, & and no URLSearchParams.

3. POST (create)

```tsx
interface Post{
    id: number;
    title: string;
    body: string;
    userId: number;
}

const {data, status} = await axios.post<Post>("https://jsonplaceholder.typicode.com/posts", 
    {
        title: "My first Post",
        body: "Learning Axios",
        userId: 1
    }
);

console.log(status); //201
console.log(data); // created post with id: 101
```
- The signature is axios.post(url, body, config?).
- Notice there is no JSON.stringify() and no Content-Type header.axios does both automatically for objects.

4. PUT and PATCH (update)

```tsx
// put send the full object
axios.put<Post>("https://jsonplaceholder.typicode.com/posts/1",{
    id: 1,
    title: "Updated title",
    body: "updated content",
    userId: 1,
})

// Patch send only what changed
axios.patch<Post>("https://jsonplaceholder.typicode.com/posts/1", {
    title: "Only the title changed",
});
```

5. DELETE

```tsx
const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
console.log(response.status); //200
```
- axios.delete(url, config?) takes no body.After a real delete update your react state so the content disapperas from the UI.

**Remember these four points**
- The result is always in response.data
- The generic <T> types data.
- Pass plain objects as the body.
- use params: {} from query strings.

#### cheatsheet
|Action|Axios call|Body?|
|------|----------|-----|
|Read|`axios.get(url, {params})`|no|
|Create|`axios.post(url, body)`|yes|
|Replace|`axios.put(url, body)`|yes|
|Partial update|`axios.patch(url, body)`|yes|
|Delete|`axios.delete(url)`|no|