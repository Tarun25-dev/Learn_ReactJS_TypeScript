### Error handling, timeout, and Cancellation

1. Why axios error handling is different?

- Fetch only throws errors on network failures, A 404 or 500 still "succeeds", so you must check response.ok.
- Axios throws on any Non 2xx status(200 - 299), A 404 or 500 goes stright to catch.

```tsx
try{
    await axios.get("https://jsonplaceholder.typicode.com/users");
} catch (error) {
    console.log("caught"); // runs for 404, beacuse axios rejects it.
}
```

2. The three kinds of Axios errors:

```tsx
try {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
} catch(error){
    if(axios.isAxiosError(error)){
        if(error.response){ // server replied with an error 404 / 500 status.
            console.log(error.response.status); // 400
            console.log(error.response.data); // error body from the server
        } else if(error.request){ // request sent, no response likely network down, server down, or timeout.
            console.log("No response from server");
        } else { // Problem while setting up the request
            console.log(error.message);
        }
    } else { // Not an axios error (may a bug in your own code)
        console.log("Unexpected error");
    }
}
```
- `axios.isAxiosError(error)` is used to check whether an error was created by Axios.
- if its true then axios errors classified into three:
- error.response
- error.request
- error.message
- else not axios error

3. Status specific messages
```tsx
if(axios.isAxiosError(error) && error.response){
    switch(error.response.status){
        case 400: 
            setError("Bad request");
            break;
        case 401:
            setError("Authentication is missing / Please Log in");
            break;
        case 404:
            setError("Not found");
            break;
        case 500:
            setError("Server error, Try later!");
            break;
        default: 
            setError("Something went wrong!");
    }
}
```
- **400 Bad Request happens when the client sends a request that the server cannot process because the request is invalid or incorrectly formatted.**

#### Full react component with loading and error

```tsx
function App(){
    const [users, setUsers] = useState<User []>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getUsers(){
            try{
                const {data} = await axios.get<User []>("https://jsonplaceholder.typicode.com/users");
                setUsers(data);
            } catch(error){
                if(error.isAxiosError(error)){
                    setError(error.response ? `Error: ${error.response.status}` : "Network Error");
                } else {
                    setError("Something went wrong");
                }
            } finally {
                setLoading(false);
            }
        }
        getUsers();
    }, []);

    if(loading) return <p>{Loading Users...}</p>

    if(error) return <p>{error}</p>

    return(
        <>
            {users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            ))}
        </>
    );
}
```

5. Timeout:

- If the server responds within the timeout limit, Axios receives the response.
- If the server takes too long, Axios stops waiting and rejects the request with a timeout error.

```tsx
try{
    await axios.get(url, {timeout: 3000}); // 3 seconds
} catch (error){
    if(error.isAxiosError(error) && error.code == "ECONNABORTED"){
        console.log("request timed out");
    }
}
```
- The value in milliseconds.
- The default value is 0, so there is no timeout.
- Fetch has no timeout option so you need to build it one using abortController.
- To test it keep timeout: 1, which fails every request.

6. Cancellation
- Axios uses the same abortController as fetch.
- cancellation means stopping an HTTP request before it completes.
- For example, your React application sends a request to fetch users. But before the server responds, the user navigates to another page.
- You don't need the old request anymore, so you can cancel it.

```tsx
useEffect(() => {
    const controller = new AbortController();
    async function getPosts(){
        try{
            const {data} = await axios.get<Post[]>(url, {signal: controller.signal});
            setPosts(data)
        } catch (error){
            if(axios.isAxiosError(error)) return; // normal cancellation, not a failure.
            console.log(error);
        }
    }
    getPosts();

    return () => controller.abort(); // cleanup on unmount
}, []);
```

- signal connects the controller to the request.
- controller.abort() cancels it.

