import { useReducer } from "react";

type Action = 
| {type: "increase"}
| {type: "decrease"}
| {type: "reset"};

function reducer(state: number, action:Action){
    switch(action.type){
        case "increase":
            return state + 1;
        case "decrease":
            return state - 1;
        case "reset":
            return 0;
    }
}

function Counter1(){
    const [count,dispatch] = useReducer(reducer, 0);
    return(
        <>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch({type:"increase"})}>Increase</button>
        <button onClick={() => dispatch({type:"decrease"})}>Decrease</button>
        <button onClick={() => dispatch({type:"reset"})}>Reset</button>
        </>
    );
}

export default Counter1;