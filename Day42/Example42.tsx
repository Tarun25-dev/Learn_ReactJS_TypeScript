import { useDeferredValue, useState, useTransition, type ChangeEvent } from "react";

const products = Array.from({length:1000}, (_,index) => `Product ${index+1}`);

function SearchFilter(){
    const [search, setSearch] = useState("");
    const deferredSearch = useDeferredValue(search);

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isPending, startTransition] = useTransition();

    function handleSearch(event: ChangeEvent<HTMLInputElement>){
        const value = event.target.value;
        setSearch(value);

        startTransition(() => {
            const filtered = products.filter((product) => {
                return product.toLowerCase().includes(deferredSearch.toLowerCase());
        });
          setFilteredProducts(filtered);
        });
    
    }
    return(
        <>
        <input type="text" onChange={handleSearch} value={search} placeholder="Search Products." className="border px-3 py-2 m-3 font-medium text-lg rounded"/>
{isPending && (
        <p className="text-2xl font-light text-gray-400 px-2 py-2">
          Updating results...
        </p>
        )}
        <div className="flex flex-wrap justify-evenly gap-2">
        {filteredProducts.map((product) => (<div key={product}><p className="border bg-amber-200 text-black font-semibold w-fit">{product}</p></div>))}

        </div>
        </>
    );
}

export default SearchFilter;