import { useState } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
};
const products: Product[] =[
    {id:1,name: "Laptop", price: 50000},
    {id:2,name: "Phone", price: 25000},
    {id:3, name: "Tablet",price: 32000},
    {id:4, name: "PowerBank", price: 1500},
];

function Search(){
    const [search, setSearch] = useState("");
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    return(
        <div>
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            {filteredProducts.map((p) => (<p key={p.id}>{p.name} - {p.price}</p>))}
        </div>
    );
}

export default Search;