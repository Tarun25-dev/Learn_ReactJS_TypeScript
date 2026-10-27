import { useDispatch, useSelector } from "react-redux";
import {increment} from "./features/counter/counterSlice";



function App() {
    const count = useSelector((state: any) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment(5))}>+</button>
        </div>

        </>

    );
}

export default App;