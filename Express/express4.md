### Middleware-2

#### Lets build real middleware

1. **Logger middleware:**
- Suppose you want to know which API endpoint customer accessing.
```js
const logger = ((req, res, next) => {
    console.log(req.method);
    console.log(req.url);

    next();
});
```
- When someone visits localhost:5000/api/orders 
- Your terminal might show: 
- GET /api/orders
- req.method tells the HTTP method
- req.url tells you the requested url
- next() continues the request
- This is useful for debugging and monitoring.

2. **Authentication middleware:**
- Imagine the only authenicated persons can access order history.
```js
const checkAuth = ((req, res, next) => {
    const isLoggedIn = true; // or check through real cred from database 
    if(isLoggedIn){
        next();
    }  else {
        res.status(401).send("Please login first!");
    }

});
```
- Now use it in a route:
```js
app.get("/orders", checkAuth, (req, res) => {
    res.send("Your Orders");
});
```
- Customer requests /orders

```text
                        checkAuth middleware
                                 |
        _________________________|_________________________
       | LoggedIn |                         | Not LoggedIn |
            |                                      |
       |  next()     |                    | 401 unAuthorized | 
       | show orders |                    | Stop request     |

```
- You would verify a JWT token rather use a hardcode boolean.

3. **Validation middleware:**

- Suppose a customer order an item without item name.
- We dont want to create an individual order for that invalid order.
```js
const validOrder = ((req, res, next) => {
    if(!req.body.item){
        return res.status(400).json({ message: "Item name is required" });
    }
    next();
});
```
- Use it:
```js
app.use(express.json());

app.post("/order", validOrder, (req, res) => {
    res.json({
        message: "Order placed successfully!",
        order: req.body;
    });
});
```
- express.json() reads incoming json request body.
- validateOrder checks the data.
- next() allows valid requests reach the routes.
- Invalid requests receives a 400 response.

**Important: Express executes middleware in the order in which it is registered, provided the request matches it and control is passed forward.**

- Actually middleware parameters atmost has 4 parameters we already know req, res, next but we need to know anout "err".

**Error-handling middleware:**
- const validate = ((err, req, res, next) => { ... })
- Why do we need err?
- Imagine a customer orders an item in dineflow.
- Your express server tries to save that order into mongobd.
- But suddenly mongodb an error beacuse beacuse the database connection has failed.

- What should our server do?
- It should't crash without handling the error.
- It should't send a confusing response.
- It should handle the error and returns meanigful response to react.

```js
import express from "express";

const app = express();

app.get("/orders", (req, res, next) => {
    const error = new Error("Database connection failed");
    next(error);
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({
        message: "Something went wrong!"
    });
});

app.listen(4000);
```

#### Why can't we use normal middleware to handle errors?

- The normal middleware has three prameters. It is designed for normal reqesting process.
- But this one: app.use(err, req, res, next) => { ... }
- Express it recognized as error handling middleware beacuse it has four parameters,
- The first parameter must be err, order matters.