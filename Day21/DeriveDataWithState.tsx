import { useState } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
};

export default function DeriveDataState(){
        const [products, setProducts] = useState<Product[]>([
        {id:1,name: "Laptop", price: 50000},
        {id:2,name: "Phone", price: 25000},
        {id:3, name: "Tablet", price: 32000},
        {id:4, name: "PowerBank", price: 1500},
    ]);
   
    const  affordableProducts = products.filter((p) => p.price < 35000);


    return(
        <>
        {affordableProducts.map(product => (<p>{product.name} - ₹{product.price}</p>))}
        </>
    );
}
