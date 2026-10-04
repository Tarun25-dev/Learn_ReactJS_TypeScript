import BrokenComponent from "./BrokenComponent";
import ErrorBoundary from "./ErrorBoundaries";

function App(){
    return(
        <>
        <ErrorBoundary>
            <BrokenComponent />
        </ErrorBoundary>
        </>
    );
}

export default App;