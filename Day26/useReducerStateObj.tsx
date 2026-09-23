import { useReducer } from "react";

type State = {
    count: number;
    message: string;
};

const initialState: State = {
    count: 0,
    message:"Ready",
};

type Action = 
    |{type:"increase"}
    |{type:"decrease"}
    |{type:"reset"};


function reducer(state: State, action:Action): State{
    switch(action.type){
        case "increase":
            return {...state,count: state.count + 1, message: "Increased"};
        case "decrease":
            return {...state,count: state.count - 1, message: "Decreased"};
        case "reset":
            return initialState;
    };
}

function StateObj(){
    const [state,dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <p>Count: {state.count}</p>
            <p>{state.message}</p>
            <button onClick={() => dispatch({type:"increase"})}>Increase</button>
            <button onClick={() => dispatch({type:"decrease"})}>Decrease</button>
            <button onClick={() => dispatch({type:"reset"})}>Reset</button>
        </div>
    );
}

export default StateObj;