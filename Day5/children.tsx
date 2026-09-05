import type { ReactNode } from "react";

type childProp = {
    children: ReactNode;
};

function Card({children}: childProp){
    return (
        <div>
            <p>Before children content/element</p>
            {children}
            <p>After children content/element</p>
        </div>
    );
}

export default Card;