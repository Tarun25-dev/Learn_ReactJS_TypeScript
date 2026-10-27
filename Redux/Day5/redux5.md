### Building a Real Cart
- We will build a small shopping cart so we can see why payload is useful:
- The goal is to understand this flow:
```text
Product
    ⬇️
dispatch(addItem(product))
    ⬇️
Action + Payload
    ⬇️
Reducer
    ⬇️
Cart state changes
    ⬇️
React UI updates
```

1. Suppose our cart needs to store products:
```text
Cart
|___ Burger
|___ Pizza
|___ Coke
```
- Our Redux state could look like: 
```js
{
    items: []
}
```
- After adding a burger:
```js
{
    items: [
        {
            id: 1,
            name: "Burger",
            price: 150
        }
    ]
}
```

2. Create a cart slice (src/features/cart/cartSlice.ts):
```tsx
import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: [],
    },

    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const {addItem} = cartSlice.actions;
export default cartSlice.reducer;
```
3. Add the cart reducer to the store (src/app/store.ts):
- We know have two slices: counter, cart
```tsx
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    },
});
```

4. Now create the UI
```tsx
import {useDispatch} from "react-redux";
import {addItem} from "./features/cart/cartSlice";

function App(){
    const  dispatch = useDispatch();
    const product = {
        id: 1,
        name: "burger",
        price: 150,
    };
    return (
        <button onClick={() => dispatch(addItem(product))}>Add Burger</button>
    );
}

export default App;
```
- There are two different things happening.
- addItem(product) Creates the action and puts product into its payload.
- dispatch(...) Sends that action to redux.
- So:
```text
addItem(product)
    ⬇️
Action with payload
    ⬇️
dispatch()
    ⬇️
Redux
```

5. Reading the cart:
- We can use useSelector() to read the cart.
```tsx
const items = useSelector((state: any) => state.cart.items)
```

6. Display the cart:
```tsx
function App() {
    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.cart.items);
    const product = {
        id: 1,
        name: "burger",
        price: 150,
    };
    return(
        <div>
            <button onClick={() => dispatch(addItem(product))}>Add Burger</button>
            <h2>Cart</h2>
            {items.map((item) => (
                <p key={item.id}>{item.name} - ${item.price}</p>
            ))}
        </div>
    );
}
```

7. One thing we need to improve, our current cart has a problem. 
- If you click: 
```text
add burger
add burger
add burger
```
- We'll get
```text
items:
[
    burger,
    burger,
    burger
]
```
- A real cart  usually wants something like
```text
burder X 3
```
- So our next step is to learn how to reducer can find existing data and update it, rather than blindly adding another item.

- Our mental Model so far like this:
```text
STORE
⬇️
contains
⬇️ 
SLICES
⬇️
contain
⬇️
STATE + REDUCERS
⬇️
component dispatches
⬇️
ACTION + PAYLOAD
⬇️
REDUCER updates STATE
⬇️
useSelector reads STATE
⬇️
UI updates
```