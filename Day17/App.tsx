import Login from "./ConditionalRendering1";
import { Login2 } from "./ConditionalRendering1";
import Login3 from "./ConditionalRendering2";
import Login4 from "./ConditionalRenderingWithData";

function App(){
    return(
        <div>
            <Login />
            <hr />
            <Login2 />
            <hr />
            <Login3 />
            <hr />
            <Login4 />
        </div>
    );
}

export default App;