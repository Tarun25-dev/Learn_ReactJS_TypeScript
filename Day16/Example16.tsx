import {useEffect} from "react";
function Example16(){
    useEffect(() => {
        function handleResize(){
            console.log(window.innerWidth);
        }
        window.addEventListener("resize",handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, []);
    return(
        <h1>Resixe the browser</h1>
    );
}

export default Example16;