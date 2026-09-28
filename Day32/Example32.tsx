import { useEffect, useState } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    desciption: string;
    rating: {
        rate: number;
        count: number;
    }
};

function FetchProductsApi(){
    const [product, setProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function FetchProducts(){
            try{
                const response = await fetch("https://fakestoreapi.com/products");

                if(!response.ok){
                    throw new Error("Failed to fetch products");
                }
                const data: Product[] = await response.json();
                setProduct(data);
            }
            catch{
                setError("something wrong!");
            }
            finally{
                setLoading(false);
            }
        }
        FetchProducts();
    });

    if (loading){
        return <p>Loading...</p>
    }
    if (error){
        return <p>{error}</p>
    }

    return(
        <>
        <h1>Products</h1>
        {product.map((p) => (
            <div key={p.id}>
                <img src={p.image} alt={p.desciption} />
                <p><strong>Product: {p.title}</strong></p>
                <p>Price: ${p.price}</p>
                <p>Category: {p.category}</p>
                <p id="rate">Rating: {p.rating.rate} of {p.rating.count}</p>
            </div>
        ))}
        </>
    );
}

export default FetchProductsApi;
