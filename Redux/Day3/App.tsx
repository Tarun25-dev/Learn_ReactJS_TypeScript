import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from "./features/counter/counterSlice";
import App2 from "./App2";


function App() {
    const count = useSelector((state: any) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
        
        <App2 />

        </>

    );
}

export default App;