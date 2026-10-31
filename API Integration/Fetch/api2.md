### GET requests and query parameters

#### What is a GET request?
- A GET request retrieves data from a server.
- For example in my table order app i might want to:
- Get all menu items.
- Get one particular menu item.
- Get all orders for table.
- Seatch for vegetarian dishes.
- These operations can use GET requests.

**Basic Syntax:**
```ts
const response = await fetch("https://example.com/api/products");
```
- By default fetch() uses a GET method if you dont specify a method.

#### What are the query parameters?
- Suppose you want to retrieve only veg products instead of every item.
- You could send a URL like this:
```ts
const url = "https://example.com/api/products?category=veg";
const response = await fetch(url);
```
- Here: ? starts the query parameters.
- category is the parameter name.
- veg is parameter value
- And if we need to give multiple parameters then we use &
```ts
const url = "https://example.com/aapi/products?category=veg&limit=10"
```
- This requests veg products with a limit of 10.
- Assume the backend supports those parameters.

**Important:** Query parameters don't filter the data by themselves. The backend must understand and process them.

**Example:**
```js
async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    if(!response.ok){
        throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    console.log(data);
}

getPosts();
```

- If we want a cleaner way to construct query parameters.
- Use URLSearchParams hook when you have several parameters.

```ts
const params = new URLSearchParams({
    userId: "1",
    _limit: "5",
});

const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${params}`);
```
- parameter values are string.

**When should we use query parameters?**

|requirement|example|
|-----------|-------|
|Filter|?category=veg|
|Search|?search=biryani|
|pagination|?page=2&limit=10|
|Sorting|?sort=price|
|Filter by user|?userId=1|

- The exact parameter names depend on the API you are using.

### POST requests -- sending data to the server
- GET retrives data. POST commonly creates a new resource by sending data to the server.
- Imagine a registration form in you react app. The user enters a name and email, and send that information to the backend.

**The POST syntax:**
```ts
const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "My first post",
        body: "Learning Fetch API",
        userId: 1,
    }),
});
```
- method: tells the server which HTTP operation we are requesting.
- headers: {"Content-Type": "application/json"}: Tells the server that you're sending JSON data in the request body.
- body: stringify() converts js Object into a JSON string that can be sent in the request body.

**Example:**
- js object
```js
{
    title: "Hello"
}
```
- After JSON.stringify() which is JSON format:
```JSON
{
    "title": "Hello"
}
```
#### Complete POST function with error handling example:

```ts
async function createPost(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "My first post",
                body: "Learning React API integration",
            }),
        })
        if(!response.ok) throw new Error("Failed to create post");
        const data = await response.json();

        console.log("Created post:", data);
    } catch (error) {
        console.log(error);
    }
}

createPost();
```

**Important:** fetch() doesnt auto set JSON headers or stringify our object. We must do those things ourself when sending JSON.

### PUT & PATCH -- Updating data
- Suppose an existing item has like this:
```js
{
  "id": 1,
  "name": "Veg Fried Rice",
  "price": 150
}
```

- You want to change its price to 180.
- Both PUT and PATCH are used for updates, But they have different meanings.

- PUT - Replaces a resource representation, typically by sending the complete representation.
- PATCH - Applies a partial update to a resource.

- Example for PUT:
```ts
async function updatePost(){
    const response = await fetch("https://jsonplaceholder.typicon.com/posts/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: 1,
            title: "updated title",
            body: "Updated content",
            userId: 1,
        });
    });
    if(!response.ok){
        console.log("Failed to update post");
    }
    const data = await response.json();
    console.log(data);
}
```
- PUT updates total content even if some rewrite total data.

- Example for PATCH:

```ts
async function updatePost(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Only the title changed",  
        });
    });
    if (!response.ok) console.log("Failed to update post!");

    const data = await response.json();

    console.log(data);
}

updatePost();
```
- The PUT request sends entire field you want to change.
- The PATCH request sends only the field you want to change.

### DELETE -- deleting data
- Suppose an admin wants to remove a menu item.
```ts
async function deletePost(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
    });
    if(!response.ok) throw new Error("Failed to delete post");
    console.log("Delete request successfull");
}
```
- A successful DELETE request may return "204 No Content", which means there is no response body.
- That's why you should't always call response.json() after every request.
- If you want to see that 204 then "const data = await response.json(); console.log(data);"
- After successfully deleting an item, you normally update your local list so the deleted item disappears from the UI.

### HTTP headers and status codes
**What are headers?**

Headers carry additional information about a request or response.

For example, an API might require an authentication token.

```js
const response = await fetch("https://example.com/api/profile", {
    headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
    },
});
```
- Authorization sends a bearer token.
- Accept tells the server that your client expects JSON.
- The server must support the authentication scheme you're using.

**Common HTTP status codes**
|status|meaning|
|------|-------|
|200 ok|Request succeeded|
|201 created|Resource created|
|204 No Content|Succeeded without a response body|
|400 Bad Request|Request is invalid|
|401 Unauthorized|Authentication is missing or invalid|
|403 Forbidden|Access is not permitted|
|404 Not Found|Resource not found|
|500 Internal Server Error|Server encountered an error|

- These codes help you understand the result of an API request.
- catch block handles thrown errors, including network failures and errors you deliberately throw for unsuccessful HTTP responses.

### Connect API requests to React forms
- Suppose you want a form where a user enters a post title and body and clicks create post.
- The flow will be:
```text
User fills form
⬇️
React stores input values
⬇️
User Clicks Submit
⬇️
POST request using fetch()
⬇️
Server returns response
⬇️
Show success or error
```

```tsx
interface Post{
    id: number;
    title: string;
    body: string;
    userId: number;
}

function App(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        setLoading(true);
        setMessage("");
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    body,
                    userId: 1,
                }),
            });
            if(!response.ok){
                throw new Error("Failed to create post");
            }
            const data: Post = await response.json();
            setMessage(`Post created! ID: ${data.id}`);
            setTitle("");
            setBody("");
        } catch (error){
            setMessage(error instanceof Error ? error.message : "Something went wrong");
        } finally {
            setLoading(false);
        }
    }
    return(
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Enter title" required />
                <textarea value={body} onChange={(event) => setBody(event.taregt.value)} placeholder="Enter body" required />
                <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Create Post"}</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}
```

### Build reusable API functions
- As applications grow, writing the same fetch logic repeatedly becomes inconvenient.
- Instead, create a reusable API helper.
- For example, create src/api.ts:
```ts
const API_URL = "https://jsonplaceholder.typicode.com";

export async function apiRequest<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T>{
    const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
        Accept: "application/json",
        ...options.headers,
    },
    });
    if(!response.ok) throw new Error(`Request failed:${response.status}`);
    if(!response.status === 204) return undefined as T;

    return (await response.json()) as T;
}
```
- This function centralizes common behavior:
- Builds the URL.
- Makes the request.
- Checks HTTP errors.
- Handles empty 204 responses.
- Parses JSON.
- T is a generic type.

**Use it for GET:**
```ts
interface Post{
    id: number;
    title: string;
    body: string;
    userId: number;
}

const posts = await apiRequest<Post[]>("/posts?userId=1");
```

**Use it for POST:**
```ts
const newPost = await apiRequest<Post>("/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "Hello",
        body: "Learning reusable API functions",
        userId: 1,
    }),
});
```

**Use it for DELETE**
```ts
await apiRequest<void>("/posts/1", {
    method: "DELETE",
});
```

### Complete CRUD -- The real-world pattern 
- Create - POST (Send a new item(resource) to the backend.)
- Read - GET (Retrieve items from the backend.)
- Update - UPT / PATCH (Change an existing item's information.)
- Delete - DELETE (Request removal of an item.)

### Fetch inside useEffect:
- We already learned how to fetch data when a react component mounts. In real applications, you should also understand what happens if the component unmounts while the request is still running.
- You can use AbortController to cancel an ongoing request.
```ts
useEffect(() => {
    const controller = new AbortController();
    async function getPosts(){
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                signal: controller.signal
            });
            if(!response.ok){
                throw new Error("Failed to fetch posts");
            }
            const data = await response.json();
            setPosts(data);
        } catch (error){
            if(error instanceof Error && error.name === "AbortError"){
                return;
            }
            console.error(error);
        }
    }
    getPosts();
    return () => {
        controller.abort();
    }
}, []);
```
- AboutController creates a cancellation signal.
- signal: connects that signal to the fetch request.
- controller.abort() cancels the request when cleanup runs.
- AbortError is handled seperately so normal cancellation isn't shown as an application failure.
- This is useful when navigating between react routes or when a components no longer needs the result.

### Common fetch mistakes

|mistake|correct approach|
|forgetting await response.json()|parse the response body and await it.|
|Assuming 404 triggers catch|check response.ok|
|Sending an object directly as body|Use JSON.stringify(object) for JSON requests.|
|Forgetting the JSON content-type error| set "Content-Type": "application/json", when sending JSON.|
|Parsing a 204 response as JSON|Handle empty responses seperately.|
|Showing no loading indicator|Track loading with react state|
|Ignoring network errors|use try catch|
|Putting secret credentials in react|Keep secrets on the backend.|
|Assuming a request updates automatically|update state or refetch the data.|

**What about CORS?**
- Sometimes a request works in an API testing tool but fails in your browser with a CORS error.
- CORS(Cross-Origin Resource Sharing) is a browser security mechanism. The API server must allow requests from your frontends origin when CORS applies.
