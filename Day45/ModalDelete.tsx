import { createPortal } from "react-dom";

type ModalProps = {
    onClose: () => void;
};

function ModalDelete({onClose}: ModalProps){
    return createPortal(
        <>
        <h1>Delete Account</h1>
        <p>This action can't be undone</p>
        <button onClick={onClose}>Cancel</button>
        <button onClick={onClose}>Delete</button>
        </>,document.body
    );
}

export default ModalDelete;