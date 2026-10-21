### What is Redux?

Redux is a state management library that helps you manage and share application state in a predictable way.
- We know that a state is data that a component remembers and that can change over time.
- But what happens when multiple components need the same state?
- Thats where problem begins.

Let's understand the approaches.

### Problem A: Each component manages its own state

Suppose the Navbar has its own cart
```tsx
const [count, setCount] = useState(0);
```
And the CartPage has a separate state:
```tsx
const [cartItems, setCartItems] = useState([]);
```
These are independent pieces of state.
If the user adds a product, the Navbar's count won't automatically update just because the CartPage's state changes.

Why? Because they are managing different state variables.

We need a way to keep shared data consistent.

### Problem B: Passing props through many components

React already provides a way to share data: props.

```tsx
function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <ProductList
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  );
}
```
You can pass the state and its updater function to child components.

This is called prop drilling.

Prop drilling isn't inherently bad. It's perfectly fine for simple applications. But as the component tree grows, passing props through many layers can become difficult to maintain.

That's one of the problems Redux can help solve.
