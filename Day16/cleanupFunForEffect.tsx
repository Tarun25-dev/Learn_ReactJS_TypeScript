import { useEffect } from "react";

function Cleanup1(){
    useEffect(() =>{
        const timer = setInterval(() => {
            console.log("Timer Running...");
        },5000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return(
        <div>
            <h1>Timer Explanation</h1>
        </div>
    );
}

export default Cleanup1;