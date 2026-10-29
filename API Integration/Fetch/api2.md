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