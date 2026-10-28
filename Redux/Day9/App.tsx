import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart, decreaseQuantity } from "./features/cart/cartSlice";

function App(){
    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.cart.items);
    const products = [
    {
        id: 1,
        name: "Burger",
        price: 150,
    },
    {
        id: 2,
        name: "Pizza",
        price: 250,
    },
    {
        id: 3,
        name: "Coke",
        price: 60,
    },
];
    return(
        <>
        <h1>Items</h1>
        <hr />
        
        {products.map((product) => (
            <div key={product.id}>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <button onClick={() => dispatch(addItem(product))}>Add to cart</button>
            </div>
            
        ))}

        <h1>Cart</h1>
        <hr />
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