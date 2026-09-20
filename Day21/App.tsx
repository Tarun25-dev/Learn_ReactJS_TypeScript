import DeriveNonChanginingData from "./DerivedDataList";
import DeriveDataState from "./DeriveDataWithState";
import Search from "./DeriveDataForSearch";

function App(){
    return(
        <>
        <DeriveNonChanginingData />
        <hr />
        <DeriveDataState />
        <hr />
        <Search />
        </>
    );
}

export default App;