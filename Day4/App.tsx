import Product from "./Product";

function App(){
    return(
        <>
        <hr />
        <Product name="Laptop" price={150000}/>
        <hr />
        <Product name="Mobile" price={200000} category="Electronics"/>
        </>
    );
}

export default App;