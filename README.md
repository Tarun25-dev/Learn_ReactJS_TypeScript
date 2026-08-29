# Hooks:

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
   [1]. () => {} the effect function
   [2]. [dependencies] tells react when to run the effect.
- useRef
- useContext
- useReducer
- useMemo
