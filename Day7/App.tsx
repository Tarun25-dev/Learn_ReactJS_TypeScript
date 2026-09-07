import {Map2,Map3} from "./map";
import Map1 from "./map";

function App(){
    return(
        <>
        <div>
            <p>First map component</p>
            <Map1 />
            <hr />
        </div>
        <div>
            <p>Profiles component</p>
            <Map2 />
            <hr />
        </div>
         <div>
            <p>product component</p>
            <Map3 />
            <hr />
        </div>

        </>
    );

}

export default App;