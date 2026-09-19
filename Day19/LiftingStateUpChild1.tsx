type DisplayCountProps = {
    count : number;
}

function DisplayCount({count}: DisplayCountProps){
    return(
        <div>
            <h1>Count: {count}</h1>
        </div>
    );
}

export default DisplayCount;