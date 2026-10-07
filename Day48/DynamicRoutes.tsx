import { Link, useParams } from "react-router"
import { Routes, Route } from "react-router";

function Home(){
    return(
        <>
        <h1>Movies</h1>
        <div>
            <Link to="/movies/101">Movie101</Link>
            <Link to="/movies/203">Movie203</Link>
        </div>
        </>
    );
}

function MovieDetails(){
    const {movieId} = useParams();
    return(
        <>
        <h1>Movie Deatils</h1>
        <p>MovieId: {movieId}</p>
        </>
    );
}

function App1(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/movies/:movieId" element={<MovieDetails />}/>
        </Routes>
        </>
    );
}

export default App1;