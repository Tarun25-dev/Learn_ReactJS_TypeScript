import { useReducer } from "react";

type Action = {
    type:"increase";
    amount: number;
}

function reducer(count: number,action: Action){
    if(action.type === "increase"){
        return count + action.amount;
    }
    return count;;
}

function Counter2(){
    const [count,dispatch] = useReducer(reducer,0);
    return(
        <>
        <p>Count: {count}</p>
        <button onClick = {() => dispatch({type:"increase",amount:20})}>Increase</button>
        </>
    );
}

export default Counter2;