type ProductProps = {
    name: string;
    price: number;
    category?: string;
};

function Product({name, price, category}: ProductProps){
    return(
        <>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <h3>{category}</h3>
        </>
    );
}

export default Product;