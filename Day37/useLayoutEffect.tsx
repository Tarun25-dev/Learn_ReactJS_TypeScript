import { useLayoutEffect, useRef, useState } from "react";


function UseLayoutEffect(){
    const boxRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
        if(boxRef.current){
            setWidth(boxRef.current.getBoundingClientRect().width);
        }
    }, []);
    return(
        <>
        <div ref={boxRef} style={{height:"34px", width:"65px", fontSize:"9px", color:"white", background:"green"}}>
            Box
        </div>
        <p>Width of Div: {width}</p>
        </>
    );
}

export default UseLayoutEffect;