# "Express.js"

### What is Express?

Express is a minimal web-framework for Node.js. It recieves HTTPS requests and matches them to routes, runs your code and sends a response. It handles routing, request parsing, and middleware, so you don't write raw Node HTTP code.

1. *Client and Server:*
- Client: Whatever asks for data, such as your react app, a browser or postman.
- Server: A program that is always running, listens for requests and sends back response.

2. *The HTTP request and response:*
- Every request has:
- A method (GET, POST, PUT, PATCH and DELETE),
- A URL/path(api/menu),
- Optional headers and a body(the JSON you send).

- Every response has:
- A status code: (200, 201, 404, 500),
- Optional headers and a body(usually JSON).

### What are Node.js and Express?

- Node.js lets you run javascript outside the browser, so you can write servers in JS.
- Express is a small framework on top of node, that makes servers easy: routing, reading request data and sending responses without lots of raw Node code.
- npm is the node package manager.

#### Setup

1. Check node:
```bash
node -v
npm -v
```
- If not installed install from official node website.

2. create the project
```bash
mkdir express-learn
cd express-learn
npm init -y
```
- npm init -y creates a package.json, the file that describes your project and its packages.

3. Install packages
```bash
npm install express
npm install -D nodeman
```
- express is the framework of Node.
- nodeman (-D means a dev dependency) restarts the server automatically when you save a file.

4. Edit package.json

Add "type": "module" so you can use import, then add the scripts.
```json
"name": "express-learn",
"type": "module",
"scripts": {
    "start": "node index.js",
    "dev": "nodeman index.js"
}
```
- Keep the other fields npm generated.

5. create index.js
```js
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.listen(PORT, () => {
    console.log(`server running on http://loaclhost:${PORT}`)
});
```
- Run it. `npm run dev`
- Open localhost:3000 in browser, you should see "Hello from Express!".

|code|meaning|
|----|-------|
|import express from "express"|load the library|
|const app = express()|create your server app|
|PORT=3000|the "door number" server listens on|
|app.get("/", handler)|when a get request hits `/` run the handler|
|(req, res) => {}|req= incoming request|res= outgoing response you send|
|res.send()|send the response|
|app.listen(PORT, ...)|Start listening|