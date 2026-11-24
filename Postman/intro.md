# POSTMAN

**Postman:** Postman is an API testing tool used to send requests to a server and check the response we receive.

(or)

Postman is a tool used to test APIs by sending HTTP requests like GET, POST, PUT, DELETE to a server and checking the responses. 

**Remember:** Postman helps developers test and debug APIs easily.

# Why do we need Postman?

- To test APIs without creating a frontend.
- To send HTTP request to a server.
- To check server responses.
- To  identify errors in API requests.
- To inspect response status codes, headers and response bodies.

# Setup Postman:

- There are two ways to use Postman:
1. Postman Desktop App
2. Postman VS Code Extension

- Since we want to use VScode so, Option 2 is perfect

**Step1. Install Postman extension:**
- Open VS code.
- Click the Extensions icon(ctrl + shift + X).
- Search for Postman.
- Install the official postman extension published by postman.

**Step2. Sign in:**
- Open the Postman extension from the sidebar.
- Click Sign in.
- Your browser will opne.
- Create a free Postman account or sign in with an existing account.
- Return to VS code.
- Sign in is required to use the extension.

**Step3. Create your first API request:**
- Open the postman extension.
- Select your workspace.
- Create a new HTTP request.
- Enter the URL: https://jsonplaceholder.typicode.com/users
- Select GET
- Click Send
- You should receive a JSON response containing user details.

**Step4. Test your Express server:**
- Now test your own backend.
- Start your express server in the VS code terminal: `npm run dev`.
- Suppose your express server runs on port 5000 and has this route:
```js
app.get("/users", (req, res) => {
  res.json({message: "Users fetched successfully"});
});
```
- In postman, enter: http://localhost:5000/users
- Select GET and click send.
- Expected response in json like { "message": "Users fetched successfully" }
