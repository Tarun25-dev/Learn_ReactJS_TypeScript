### Routes

A route is a method plus a path plus a handler. Add more to index.js

```js
app.get("/about", (req, res) => {
    res.send("This is the about page.");
});

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello! API"});
});
```

- sending responses:
```js
res.send("Text or HTML");
res.json({name: "Tharun"}); // used for api's
res.status(404).json({error: "Not Found"}); // set the status first
res.sendStatus(204); // status only, no body
```
- Use res.json() for api, it sets the Content-Type: "application/json" header for you that same header you had to write with hand in fetch.

#### Routes for each method:

- `app.get("/api/menu", ...)` = Read
- `app.post("/api/menu", ...)` = Create
- `app.put("/api/menu/:id", ...)` = Replace
- `app.patch("/api/menu/:id", ...)` = Partial update
- `app.delete("/api/menu/:id", ...)` = Delete

- When your react app calls axios.post("/api/menu", data), The route app.post("api/menu") handles it.

#### Getting data from the request:

1. Route params: `req.params`

```js
// GET /api/menu/5
app.get("/api/menu/:id", (req, res) => {
    res.json({id: req.params.id});
});
```
- :id is a placeholder in the path and params are always strings.

2. Query strings: `req.query`
```js
// GET /api/search?category=veg&limit=10

app.get("/api/search", (req, res) => {
    const {category, limit} = req.query;
    res.json({category, limit});
});
```

3. Request body: `req.body`
- First add this line above this route.
```js
app.use(express.json());
```
```js
app.post("/api/menu", (req, res) => {
    const {name, price} = req.body;
    res.status(201).json({message: "Created", name, price});
});
```

- Without express.json(), req.body is undefined.
- Lets create a mini menu api:
```js
import express from "express";

const app = express();
app.use(express.json());

let menu = [
    { id: 1, name: "Burger", price: 90, category: "veg" },
    { id: 2, name: "Veg Pizza", price: 150, category: "veg" },
    { id: 3, name: "Chicken Pizza", price: 200, category: "Non-veg" },
];

app.get("api/menu", (req, res) => {
    // Read all (optional ?category=veg)
    const {category} = req.query;
    const result = category ? menu.filter((m) => m.category === category) : menu;
    res.json(result);
});

// Read one

app.get("api/menu/:id", (req, res) => {
    const item = menu.filter((m) => m.id === Number(req.params.id));
    if(!item) return res.status(404).json({message: "Item not found!"});
    res.json(item);
});

// create one item

app.post("api/menu", (req, res) => {
    const {name, price, category} = req.body;
    const newItem = {id: Date.now(), name, price, category};
    menu.push(newItem);
    res.status(201).json(newItem);
});

// delete

app.delete("api/menu/:id", (req, res) => {
    menu = menu.filter((m) => m.id !== Number(req.params.id));
    res.status(204);
});

app.listen(PORT, console.log(`Server running on https://localhost:${PORT}`));
```
