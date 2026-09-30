import { useLayoutEffect, useRef, useState } from "react";

function Example37(){
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({top: 0, left: 0});

    useLayoutEffect(() => {
        if(!showTooltip) return;

        const rect = buttonRef.current?.getBoundingClientRect();
        if(!rect) return;

        const top = rect.top + 28;
        const left = rect.left;

        setTooltipPosition({top, left});
    }, [showTooltip]);

    return(
        <div>
        <button ref={buttonRef} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>🛩️</button>
        {showTooltip && (<div style={{position:"fixed", backgroundColor:"palegreen", padding:"4px", fontSize:"15px", top:tooltipPosition.top, left:tooltipPosition.left}}>Areoplane symbol info in tooltip</div>)}
        </div>
    );
}

export default Example37;