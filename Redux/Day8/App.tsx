import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart, decreaseQuantity } from "./features/cart/cartSlice";

function App(){
    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.cart.items);
    const product = 
    {
        id: 1, 
        name: "Burger",
        price: 10
    };
    return(
        <>
        <button onClick={() => dispatch(addItem(product))}>Add Burger</button>
        <h1>Cart</h1>
        {items.map((item) => (
            <>
            <p key={item.id}>{item.name} - x{item?.quantity} - ${item?.quantity * item.price}</p>
            <button type="button" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button type="button" onClick={() => dispatch(addItem(item))}>+</button>
            <button key={item.id} type="button" onClick={() => dispatch(removeItem(item.id))}>DELETE</button>
            </>
        ))}
        <br />
        <button type="button" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
    );
}

export default App;