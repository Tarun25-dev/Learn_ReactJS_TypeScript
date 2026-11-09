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