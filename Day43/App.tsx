import { lazy, useState } from "react";
import { Suspense } from "react";


const About = lazy(() => import("./About"));

function App(){
    const [showAbout, setShowAbout] = useState(false);
    return(
        <>
        <nav className="flex items-end">
            <button onClick={() => setShowAbout(true)} className="border bg-amber-900 text-white px-3 py-2">About</button>
            {showAbout && (<Suspense fallback={<p>Loading About...</p>}><About /></Suspense>)}
        </nav>
        </>
    );
}

export default App;