import { useReducer } from "react";

function reducer(state: number, action: string){
    if(action === "increase"){
        return state + 1;
    }
    if(action === "decrease"){

        if(state === 0){
            return state
        }
        return state - 1;
    }

    return state;
}

function Counter(){
    const [count,dispatch] = useReducer(reducer,0);

    return(
        <div>
            <p>count: {count}</p>
            <button onClick={() => dispatch("increase")}>Increase</button>
            <button onClick={() => dispatch("decrease")}>Decrease</button> 
        </div>
    );
}

export default Counter;

//         if(state === 0){
        //     return state
        // }
        // this codes restricts the negative values 
// another way also there
//   <button disabled={count === 0} onClick={() => dispatch("decrease")}>Decrease</button> 
