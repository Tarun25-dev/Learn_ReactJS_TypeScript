import { useSelector } from "react-redux";


function App2() {
    const count = useSelector((state: any) => state.counter.count);

    return (
        <div>
            <h1>Another Component</h1>
            <h1>Counter</h1>
            <h2>{count}</h2>
        </div>
    );
}

export default App2;