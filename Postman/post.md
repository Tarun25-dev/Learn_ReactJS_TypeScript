# Sending a POST request (data) to an Express server

- Start your backend server by running the following command in the terminal:
```bash
npm run dev
```
- Open postman extension on the sidebar in VS code.
- Click on new HTTP request.
- Select POST and enter URL, which already defined in express like http://localhost:500/api/todos
- Check before send response, Open body and that must has this content type application/json.
- If it has text/plain change it into applicatio/json.
- We can see that right side of the URL.
- After that Click Send.
- If successfull then we can see 201 status. 

# Example: server.js
```js
const express = require("express");

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// POST route
app.post("/api/todos", (req, res) => {
  const todo = req.body;

  console.log(todo);

  res.status(201).json({
    message: "Todo created successfully!",
    data: todo
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
```
