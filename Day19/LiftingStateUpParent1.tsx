import { useState } from "react";
import DisplayButtons from "./LiftingStateUpChild2";
import DisplayCount from "./LiftingStateUpChild1";

function Parent(){
    const [count, setCount] = useState(0);
    return(
        <div>
        <DisplayCount count = {count}/>
        <DisplayButtons onIncrease = {() => {setCount(prev => prev+1)}} onDecrease = {() => {setCount(prev => prev - 1)}} onReset = {() => {setCount(0)}}/>
        </div>
    );
}
export default Parent;