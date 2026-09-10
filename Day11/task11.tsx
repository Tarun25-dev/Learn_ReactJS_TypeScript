import { useState } from "react";

type Product = {
    name: string;
    price: number;
};

function Products(){
    const [Pstate, setPState] = useState<Product>({name:"Laptop",price: 50000});
    function changeName(){
        setPState(prev => ({...prev,name:"Mobile"}));
    }
    function ChangePrice(){
        setPState(prev => ({...prev,price:Pstate.price + 1000}));
    };
    return(
        <div>
            <p>Name:{Pstate.name}</p>
            <p>Price: {Pstate.price}</p>
            <button onClick={changeName}>ChangeName</button>
            <button onClick={ChangePrice}>ChangePrice</button>
        </div>
    );
}

export default Products;