import { useState } from "react";
import ModalDelete from "./ModalDelete";

function App(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        {isOpen && (<ModalDelete onClose={() => setIsOpen(false)} />)}
        </>
    );
}

export default App;