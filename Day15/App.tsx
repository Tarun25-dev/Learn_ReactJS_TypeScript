import UseEffect1 from "./UseEffect";
import Mount from "./UseEffectMount";
import UseEffectDependency from "./UseEffectWithDependency";

function App(){
    return(
        <div>
            <UseEffect1 />
            <hr />
            <Mount />
            <hr />
            <UseEffectDependency />
        </div>
    );
}

export default App;