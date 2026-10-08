# What is React?
React is a JavaScript frontend library for building user interfaces, especially for web applications. It is fast, interactive, and supports reusable UI components.

### Key features:
- Components
- Virtual DOM
- State and props
- Declarative UI

# Hooks

## What is a Hook?
A hook is a special function that lets a functional component use React features.

## Rules of Hooks

### 1. Only call hooks at the top level
Do not call hooks inside:
- Loops (`for`, `while`)
- Conditions (`if`, ternary)
- Nested functions
- `try/catch/finally`

### 2. Only call hooks from React functions
Hooks can only be called from:
- Function components
- Custom hooks (function names start with `use`)

## Types of Hook Features

### `useState`
`useState` lets a functional component store and update data (state). When the state changes, React automatically re-renders the component so the UI stays in sync.

- Basic Syntax:
```tsx
const [state, setState] = useState(initialValue);
```

- `state` -> current value
- `setState` -> function used to update the value
- `initialValue` -> starting value of the state

- Example: Counter
```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

### `useEffect`
`useEffect` is used to perform side effects in a component. A side effect is something that happens outside the normal process of calculating and displaying JSX, such as:
- Fetching data from an API
- Updating `document.title`
- Using `localStorage`
- Setting timers
- Adding event listeners

- Basic Syntax:
```tsx
useEffect(() => {
  // side effect code
}, [dependencies]);
```

- It has two parts:
  - `() => {}` -> effect function
  - `[dependencies]` -> tells React when to run the effect

- Common forms:
  - Empty dependency array: runs once after initial render
```tsx
useEffect(() => {
  console.log("Runs once");
}, []);
```

  - With dependencies: runs when values change
```tsx
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
```

  - No dependency array: runs after every render
```tsx
useEffect(() => {
  console.log("Runs after every render");
});
```

### `useRef`
`useRef` lets you store a value that persists between renders without causing a re-render when the value changes.

Common uses:
- Accessing DOM elements directly
- Storing values that should persist between renders
- Keeping a previous value
- Managing timers and intervals

- Syntax:
```tsx
const ref = useRef(initialValue);
```

- You access the stored value using `ref.current`.

- Example 1: Access DOM element
```tsx
import { useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
```

- Example 2: Store a value without re-rendering
```tsx
function App() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };

  return <button onClick={handleClick}>Increase</button>;
}
```

### `useContext`
`useContext` is used to share data between components without passing props manually through every level.

#### Problem: Prop drilling
Imagine this component structure:
```text
App
|_____ Parent
      |_____ Child
            |______ GrandChild
```

If `App` has a username and `GrandChild` needs it, you would have to pass it through every component.

```tsx
<App username="Tharun">
  <Parent username={username}>
    <Child username={username}>
      <GrandChild username={username} />
    </Child>
  </Parent>
</App>
```

This is called prop drilling.

#### Solution: `useContext`
Step 1: Create context
```tsx
export const UserContext = createContext();
```

Step 2: Provide the context
```tsx
const username = "Tharun";

<UserContext.Provider value={username}>
  <Parent />
</UserContext.Provider>
```

Step 3: Consume the context
```tsx
const username = useContext(UserContext);
```

Now `GrandChild` can access the value directly.

#### Use cases:
- Dark/light theme
- Logged-in user information
- Language settings
- Shopping cart
- Authentication state

In short, `useContext` is used to access globally shared data without manually passing props through many intermediate components.

### `useReducer`
`useReducer` is used to manage complex state logic.

It is similar to `useState`, but instead of directly updating state, you dispatch an action and a reducer function decides how to update the state.

- Syntax:
```tsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- `state` -> current state
- `dispatch` -> sends an action
- `reducer` -> function that updates the state
- `initialState` -> starting value

- Example: Counter
```tsx
import { useReducer } from "react";

type Action = {
  type: "increment" | "decrement" | "reset";
};

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
```

# Performance Optimization Hooks

### `useMemo`
`useMemo` is a React Hook used to memoize the result of a calculation and avoid recomputing it on every render.

It is useful when a calculation is expensive and depends on certain values.

- Syntax:
```tsx
const memoizedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

- The callback runs only when one of the dependencies changes.
- If the dependencies stay the same, React reuses the previous computed value.

- Example: Filtering a large list
```tsx
import { useMemo, useState } from "react";

function ProductList({ products }) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return <div>{filteredProducts.length} items</div>;
}
```

- Use `useMemo` when the calculation is expensive, but avoid using it for every small value because it can add unnecessary complexity.

### useCallback
useCallback is a React Hook used to memoize a function so it does not get recreated on every render unless its dependencies change.

This is useful when:
- Passing functions to child components
- Preventing unnecessary re-renders
- Optimizing performance in components with heavy child updates
- Syntax:
```tsx
const memoizedFunction = useCallback(() => {
  doSomething(value);
}, [value]);
```
- The function is recreated only when one of the dependencies changes.
- If the dependency array stays the same, React reuses the previous function reference.
- Example: Preventing re-creation of a function
```tsx
import { useCallback, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return <Child onClick={handleClick} count={count} />;
}

function Child({ onClick, count }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Count: {count}</button>;
}
```
- Without useCallback, the handleClick function would be recreated every render.
- That may cause child components to re-render even when their props did not actually change.

# React Routes

## What is a Route?
A route is a path in a web app that maps to a specific page or component.

## Setup Tailwind for React + Vite

### Step 1: Install Tailwind CSS
Open the terminal inside your project folder and run:
```bash
npm install tailwindcss @tailwindcss/vite
```

### Step 2: Configure Vite
Open `vite.config.ts` and import Tailwind CSS and add the plugin:
```tsx
import tailwindcss from "@tailwindcss/vite";

plugins: [react(), tailwindcss()]
```

### Step 3: Add Tailwind to your CSS
Open `index.css` and replace its content with:
```css
@import "tailwindcss";
```

No need to write:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

For V4 setup, this is enough.

Make sure `index.css` is imported in `main.tsx`:
```tsx
import "./index.css";
```

## Setup Font Awesome

### Step 1: Install Font Awesome
Open the terminal inside your project folder and run:
```bash
npm install \
  @fortawesome/fontawesome-svg-core \
  @fortawesome/free-solid-svg-icons \
  @fortawesome/react-fontawesome
```

- `@fortawesome/fontawesome-svg-core` -> Font Awesome core
- `@fortawesome/free-solid-svg-icons` -> solid SVG icons
- `@fortawesome/react-fontawesome` -> React component

### Example usage:
```tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon={faHouse} />
```
