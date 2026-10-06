import Home from "./Home";
import About from "./About";
import { Routes, Route, Link } from "react-router";

function App(){
    return(
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </>
    );
}

export default App;