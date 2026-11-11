### Middleware?

A middleware is a function that runs between the request arriving and your route sending a response. It can read or change req, res then pass control on with next().

```text
request → middleware 1 → middleware 2 → route handler → response
```

- We have already used one: app.use(express.json()) reads the raw body and fills req.body before your routes run.
- Write our own:
```js
function logger(req, res, next){
    console.log(`${req.method} ${req.url}`);
    next(); // pass control to the next function
}

app.use(logger); // runs for every request
```
- It takes three arguments (req, res, next)
- You must call next(), or send a response otherwise the request hangs forever.
- Order matters, middlewares runs in an order you write it, so put app.use(...) above the routes it should effect.
- Same concept like interceptors in axios but this is on server side.

#### Middleware on one route only:
```js
function checkName(req, res, next){
    if(!req.body.name){
        return res.status(400).json({message: "Name is required!"});
    }
    next();
}

app.post("/api/menu", checkName, (req, res) => {
    // only reached when checkName called next()
});
```

#### Common built-in and popular middlewares
```text
express.json() → parses JSON bodies
express.urlencoded({ extended: true }) → parse HTML from bodies
express.static("public") → serve static files(images, HTML)
CORS (package) → allow your react app to call the api
morgan (package) → ready made request logger
```

#### Understand the problem that solves middleware:
- Imaging my dineflow project building
- A customer scans a QR code at restuarant table and clicks place order.
- The react frontend sends a request to server like:
```js
axios.post("http://localhost:5000/api/orders", {
    item: "Biryani",
    quantity: 1
});
```
- Now this request reaches your request server.
- But before accepting this order, server needs to perform several checks:
- Is the customer authenticated?
- Is the request data valid?
- Is the restuarant accepting current orders?
- Should we log this request?
- If everything is fine, can we create an order? 

- Here is the important question:
- Would you write all these checks inside every single api route?
- Imagine having 50 API routes:
- `/api/orders`, `/api/users`, `/api/products`, `/api/payments`, `/api/reservations`
- Writing the same authentication, validation and logging code would become to maintain.
- This is the problem solves by middleware.

- WorkFlow:
```text
React (customer clicks place order)
            ⬇
Middleware 1: Logger (Records which request arrived)
            ⬇
Middleware 2: authentication (checks whether user is authorized)
            ⬇
Middleware 3: validation (checks the order data)
            ⬇
Route handler (creates the customers order)
            ⬇
Response to react (order placed successfully)
```

The Key idea: **Middleware is a function that exectes during the journey of an HTTP request, before the final route handler (or while handling the errors).**

- First code:
```js
import express from "express";

const app = express();

app.use((req, res, next) => {
    console.log("middleware executed safety check ups");
    next();
})

app.get("/", (req, res) => {
    res.send("Welcome to dineflow");
});

app.listen(4000);

```
- app.use(...) like whenever matching request comes through this application, execute this middleware.
- req, res, next = request, response, next: continue to next middleware
- next() like i  have finished my work, continue the process this request with the next matching middleware or route handler.
- When you open http://localhost:4000

- Terminal output

```bash
middleware executed safety check ups
GET /response: Welcome to dineflow.
```

- Browser display

```text
Welcome to dineflow
```

- Middleware executes first and next() allows express to continue.
- The route handler executes.
- The response reaches to the browser.

#### What happends if we dont call next()?
- The middleware starts executing but there is no next and no response sent.
- so the request gets stuck waiting (request hangs).
- Beacuse the express doesn't automatically move to the next middleware.

- A middleware has only two choices.
- 1. Continue (using next()) = Pass control forward
- 2. Respond (res.send("Done");) = Finish a request with response.

