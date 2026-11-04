### Axios instance, interceptors, and a resuable api.ts

1. The Problem:
```tsx
axios.get("https://jsonplaceholder.typicode.com/posts", {timeout: 3000});
axios.get("https://jsonplaceholder.typicode.com/posts", {timeout: 3000});
```
- This is the same issue that apiRequest<T>() for fetch, Axios has this built-in.

2. axios.create()

api.ts

```ts
export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
    headers: {
        Accept: "application/json",
    }
})
```
- Use it in anywhere.
```tsx
import api from "./api";

const {data} = await api.get<Post []>("/posts", { params: {userId: 1} });

await api.post<Post []>("/posts", {
    title: "HI",
    body: "Axios",
    userId: 1,
});

await api.delete<Post []>("/posts/1");
```
- Pass only the endpoints. baseURL is added in front.
- Every call inherits timeout and headers.
- To switch API servers. You change one line.
- You can make a several instances, for example one for your own backend and one for a third party api.

3. Interceptors

Interceptors are functions that runs automatically on every request or response that goes through the instance.


Axios provides two types of interceptors:
1. Request Interceptor – Executes before sending a request to the server.
2. Response Interceptor – Executes after receiving a response from the server.


```text
Your code -> Request interceptor -> server -> response interceptor -> Your code
```
- Request Interceptor: Attach the auth token:
```tsx
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})
```

Axios provides built-in request and response interceptors, whereas Fetch API doesn't provide built-in interceptors. However, similar functionality can be implemented using custom wrapper functions.