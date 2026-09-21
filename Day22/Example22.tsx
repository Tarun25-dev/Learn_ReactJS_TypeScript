import { useState,useMemo } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
};

function Products(){
    const [category, setCategory] = useState("Electronic");
    
    const [products] = useState<Product[]>([
        {id:1,name:"laptop",price:100000,category:"Electronic"},
        {id:2,name:"Mobile",price:100000,category:"Electronic"},
        {id:3,name:"Computer",price:200000,category:"Electronic"},
        {id:4,name:"Shirt",price:1000,category:"Clothing"},
        {id:5,name:"Saree",price:5000,category:"Clothing"},
        {id:6,name:"Charger",price:100000,category:"Electronic"},
        {id:7,name:"Airpods",price:100000,category:"Electronic"},
    ]);
    const DesiredCategory = useMemo(() => {
        return products.filter((item) => item.category === category);
    },[products,category]);

    return(
        <>
        <button onClick={() => setCategory("Electronic")}>Electronics</button>
        <button onClick={() => setCategory("Clothing")}>Clothing</button>

        {DesiredCategory.map((product) => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
            </div>
        ))}
        </>
    );

 
}

export default Products;

    


        





   
        
    
    
