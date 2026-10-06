import { useSyncExternalStore } from "react";

let count = 0;

const listeners = new Set<() => void>();

function subscribe(listener: () => void){
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

function getSnapshot(){
    return count;
}

function increase(){
    count++;
    listeners.forEach(listener => {listener()});
}

function Counter(){

    const count = useSyncExternalStore(subscribe, getSnapshot);
    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={increase} className="border p-3 font-bold bg-amber-200 text-black text-xl">+</button>
        </>
    );
}

export default Counter;