import Counter from "./UseReducer";
import Counter1 from "./ProperActionOnlyByTypeUsingUseReducer";
import Counter2 from "./ActionWithDataByUseReducer";

function App(){
    return(
        <div>
            <Counter />
            <hr />
            <Counter1 />
            <hr />
            <Counter2 />
        </div>
    );
}

export default App;