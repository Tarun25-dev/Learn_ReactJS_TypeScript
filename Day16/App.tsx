import Cleanup1 from "./cleanupFunForEffect";
import Cleanup2 from "./cleanupFunWithDependencies";
import Example16 from "./Example16";

function App(){
    return(
        <div>
            <Cleanup1 />
            <hr />
            <Cleanup2 />
            <hr />
            <Example16 />
        </div>
    );
}

export default App;