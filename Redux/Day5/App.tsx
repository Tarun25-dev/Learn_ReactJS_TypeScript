import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./features/cart/cartSlice";

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
            <p key={item.id}>{item.name} - ${item.price}</p>
        ))}
        </>
    );
}

export default App;