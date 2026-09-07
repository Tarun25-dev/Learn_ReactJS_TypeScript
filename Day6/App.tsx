import Ternary from "./conditional";
import {SingleCondition} from "./conditional";
import { ConditionalWithProps } from "./conditional";
import User from "./multipleConditions";
import PracticeCond from "./PracticeCondtional";

function App(){
    return(
        <>
        <div>
            <p>Conditional Rendering</p>
            <Ternary />
            <SingleCondition />
        </div>

        <div>
            <p>Conditional Rendering With Props</p>
            <ConditionalWithProps isAdmin={true}/>
        </div>

        <div>
            <p>Multiple Conditions</p>
            <User isLoggedIn={true} isAdmin = {false}/>
        </div>

        <div>
            <p>Example Task</p>
            <PracticeCond isAdmin={false} isLoggedIn={true}/>
        </div>
        </>
    );
}

export default App;