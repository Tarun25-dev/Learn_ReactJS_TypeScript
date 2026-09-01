# Hooks:

## What is Hook?
- A hook is a special function that lets a functional component use react features.

## Rules of Hook:

[1]. **Only call hooks at the top level**
- Don't call hooks inside:
- Loops(for, while)
- Conditions(if, while, ternaries)
- Nested functions
- try/catch/finally

[2]. **Only call hooks from react functions(components)**
- Hooks can only be called from:
- Function Components
- Custom Hooks(function whose names start with `use`)

## Types of hook features
- **useState** : useState lets a functional component store and update data(state), when the state changes React automatically re-renders the component so the UI stays in sync.
 - Basic Syntax:
   ```tsx
   const [state, setState] = useState(initialValue);
   ```
   - state -> the current value.
   - setState -> a function used to update the value.
   - initialValue -> the starting value of the state.

  - Eaxmple: Counter
    ```tsx
    import {useState} from "react";
    function Counter(){
    const [count, setCount] = useState(0);
    return(
        <div>
           <p>Count: {count}</p>
           <button onClick = {() => setCount(count + 1)}>Increase</button>
       </div>
      );
    }
    ```
- **useEffect** : useEffect is used to perform side effects in a components, A side effect is a something that happens outside the normal process of calculating and displaying JSX, such as:
  - Fetching data from an API
  - updating document.title
  - using LocalStorage
  - setting timers
  - Adding Event listeners
 - Basic Syntax:
   ```tsx
   useEffect(() => {
   // side effect code
   ), [dependencies array]);
   ```
   - It has Two parts:
   - [1]. () => {} the effect function
   - [2]. [dependencies] tells react when to run the effect.
  - Three common forms in useEffect:
  - 1.Empty dependency array - Once after initial render
    ```tsx
    useEffect(() => {
    console.log("Runs Once");
    }, []);
   ```
   ```tsx
    useEffect(() => {
       console.log("Runs when count changes");
    }, [count]);
   ```
  - 2.With dependencies - when those values change
  - 3. No dependency array - after every render
    ```tsx
    useEffect(() => {
       console.log("Runs when count changes");
    });
    ```
- **useRef** : useRef let's you to store a value that persists between renders without causing re-render when the value changes.
  - Commonly used for:
  - Accessing DOM elements directly.
  - Stroing values that should persist between renders.
  - Keeping a Prvious Value.
  - Managing timers/intervals
 - **Syntax:**
   ```tsx
   const ref = useRef(initialValue);
   ```
   - You access the stored value using ref.current
 - **Example1: Access DOM Element (input)**

```tsx
   import {useRef} from "react";
   function App(){
        const inputRef = useRef<HTMLInputElement>(null);
        const handleClick = () => {
             inputRef.current?.focus();
        }
        return(
            <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focus</button>
           </div>
         );
     }
   ```
  - **Example2: Store a value without re-rendering**
```tsx
function App(){
   const countRef = useRef(0);
   const handleClick = () => { countRef.current += 1; console.log(countRef.current) };
   return(
      <button onClick={handleClick}>Increase</button>
   );
 }
```   


- **useContext** :
- useReducer
- useMemo
