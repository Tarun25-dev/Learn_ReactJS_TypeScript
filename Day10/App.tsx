import UpdaterForm from "./FunUpdaterForm";
import { UpdaterFormString } from "./FunUpdaterForm";
import Increment from "./TaskUpdaterForm";

function App(){
    return(
        <div>
            <UpdaterForm />
            <hr />
            <UpdaterFormString />
            <hr />
            <Increment />
        </div>
    );
}

export default App;