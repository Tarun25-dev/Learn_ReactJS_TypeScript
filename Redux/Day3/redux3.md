## useSelector() and useDispatch()

We leanred: Store -> Slice -> State -> Action -> Reducer -> Dispacth
- But theres one missing piece:
- "How Does a react component actually communicate with the redux store."
- For that we mainly use two react-redux hooks:
- useSelector() and useDispatch()

1. useSelector() - READ Redux state
- Suppose our redux store contains:
```tsx
{
    counter: {
        count: 5
    }
}
```
- A react component might want to dispay that count.
- Thats what useSelector() is for.
- Think : "useSelector - Give me some data from the Redux store."

```tsx
import {useSelector} from "react-redux";
function Counter() {
    const count = useSelector((state) => state.counter.count);
    return <h2>{count}</h2>;
}
```

2. useDispatch() - SEND an action
- Now suppose user clicks increment button.
- We need to tell to redux like increment the counter.

```tsx
import {useDispatch} from "react-redux";

const dispatch = useDispatch();

dispatch(increment());
```
- This can dispatch an action.
- useDispatch() gives your component a way to send actions to Redux.


