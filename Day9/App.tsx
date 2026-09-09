import { StateSTR } from "./state";
import StateNum from "./state";
import StateType from "./typeState";
import Counter from "./StatePractice";


function App(){
    return(
        <div>
            <StateSTR />
            <StateNum />
            <hr />
            <StateType />
            <hr />
            <Counter />
        </div>
    )
}

export default App;